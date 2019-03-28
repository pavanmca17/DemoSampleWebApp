$(document).ready(function () {
    alert("Javascript demo starting with Jquery");  

    $('#btnGetData').click(function ()
    {  
       alert('calling api');
           $.ajax({  
                         type: 'GET',  
                         url: 'http://localhost:7071/api/WorkItems',  
                         dataType: 'json',  
                         success: function (data)
                         { 
                            alert("Hello");
                            alert(data);
                         } 
                 }); 
    });  
 });