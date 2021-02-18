
form = $("#calc-form")

form.submit(function (e){

    e.preventDefault();

    var name = $('#name').val(), p_name = $('#p-name').val();
    var names = {name, p_name}; //{name: name, p_name: p_name}

    $("#percentage").text("Calculating...")
    $.ajax({

        url: '/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(names),

        success: function(res){
            //console.log(res);
            var percentage = parseFloat(res.percentage).toFixed(2);
            var result = res.result, fname = res.fname, sname = res.sname;

            $('#percentage').text(`${percentage}%`);
            $('#result').html(`${fname} and ${sname} ? <span id="rslt" >${result}</span>`);

            if (percentage < 40) {
                $('#rslt').css('color', 'red')
            }
            if (percentage < 60 && percentage >=40) {
                $('#rslt').css('color', 'orange')
            }
            if (percentage < 80 && percentage >= 60) {
                $('#rslt').css('color', 'yellow')
            }
            if (percentage >= 80) {
                $('#rslt').css('color', 'green')
            }
        },
        error: function(err){
            console.log(err);
        }

    })
})