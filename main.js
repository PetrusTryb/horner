function regenerateInput(){
    let level=$("#lvl").val()
    console.log(level)
    $("#input").html("")
    for(let i=level; i>=0; --i){
        let ihtml=`<div class="field is-horizontal">
<div class="field-body">
<div class="field">
<p class="control">
<input class="input inp" type="number">
</p>
</div>
</div>
<div class="field-label is-normal">
<label class="label">${i>0?`x<sup>${i}</sup>+`:``}</label>
</div>
</div>`
        $("#input").append(ihtml)
    }
}
function calculate(){
    $("#row1").html("<td></td>")
    $("#row2").html("<td></td><td></td>")
    $("#row3").html(`<td>${-$("#inpA").val()}</td>`)
    let numbers=$(".inp")
    let arr=Array()
    $.each(numbers,function(n){
        arr.push(Number(numbers[n].value))
        $("#row1").append(`<td>${numbers[n].value}</td>`)
    })
    console.log(arr)
    let res=arr[0]
    $("#row3").append(`<td>${res}</td>`)
    for(let i=1;i<=$("#lvl").val();i++){
        res*=-$("#inpA").val()
        $("#row2").append(`<td>${res}</td>`)
        res+=arr[i]
        $("#row3").append(`<td>${res}</td>`)
    }
    $("#out").val(res)
}
$("#lvl").on("input",regenerateInput)
$("#submit").on("click",calculate)