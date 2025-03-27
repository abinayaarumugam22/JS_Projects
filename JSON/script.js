document.getElementById('saveBtn').addEventListener('click',() =>{
    const payData ={
        name:document.getElementById('name').value,
        id:document.getElementById('eid').value,
        phone:document.getElementById('phone').value,
    };
    localStorage.setItem('payData',JSON.stringify(payData));
    alert('payslip data saved successfully!');

});
document.getElementById('printBtn').addEventListener('click',() =>{
    const payData =JSON.parse(localStorage.getItem('payData'));
    if(payData){
        const print =window.open('','_blank');
        print.document.write(`Name ${payData.name}<br>`);
        print.document.write(`id ${payData.id}<br>`);
        print.document.write(`phone ${payData.phone}`);
    }
});