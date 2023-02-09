$(document).ready(function () {
    $("#activeCountry").change(function () {
        $tableContent = '<div class="table-responsive mb-3" id="countryTable" >';
        $tableContent += '<table class="table table-hover text-nowrap">';
        $tableContent += '<thead>';
        $tableContent += '<tr>';
        $tableContent += '<th class="pt-0 pb-2">Provider</th>';
        $tableContent += '<th class="pt-0 pb-2">Rate</th>';
        $tableContent += '<th class="pt-0 pb-2">Code</th>';
        $tableContent += '<th class="pt-0 pb-2">Active</th>';
        $tableContent += '</tr>';
        $tableContent += '</thead>';
        $tableContent += '<tbody>';
        $.ajax({
            type: "GET",
            async: false,
            url: "https://api.maple-sms.com/admin/GetLocationRates",
            data: {
                'country_code': $(this).val(),
            },
            success: function (response) {
                response = JSON.stringify(response)
                var jsonArray = JSON.parse(response);
                jsonArray = jsonArray.data;
                jsonArray.forEach(function (jsonItem) {
                    $tableContent += '<tr data-codes="' + jsonItem.array_agg + '">';
                    $tableContent += '<td>' + jsonItem.location + '</td>';
                    $tableContent += '<td class="align-middle"><div class="col-sm-12"><input type="number" class="form-control" step="0.01" name="Rate"></div></td>';
                    $tableContent += '<td><button class="btn btn-info" onclick="ShowCodes(this)">show Codes</button></td>';
                    if (jsonItem.status) {
                        $tableContent += '<td class="align-middle "><div class="form-check form-switch"><input type="checkbox" class="form-check-input Country-switch" id="customSwitch1" value="" checked></td>';
                    } else
                        $tableContent += '<td class="align-middle "><div class="form-check form-switch"><input type="checkbox" class="form-check-input Country-switch" id="customSwitch1" value=""></td>';
                    $tableContent += '</tr>';
                });
            }
        });

        $tableContent += '</tbody>';
        $tableContent += '</table>';
        $tableContent += '</div>';

        $('#contentDiv').empty().append($tableContent);
    });
});
