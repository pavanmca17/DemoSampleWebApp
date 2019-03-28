$(document).ready(function () {

    $('#getPerson').click(function () {
        $('#getPeopleResult').val("");
        $.ajax({
                    contentType: 'application/json',
                    type: 'GET',
                    url: 'http://localhost:50282/api/Persons',
                    success: function (data, textStatus, jqXHR)
                    {
                            data.forEach(function (person) {
                            $('#getPeopleResult').val($('#getPeopleResult').val() + person.name + '|');
                        });
                    },
                    Error: function (datajqXHR, textStatus, errorThrown)
                    {
                        $('#getPeopleResult').val(datajqXHR.statusText);
                    }

              });
        
    });
});