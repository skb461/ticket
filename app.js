//all ticket button
let ticketBtns = document.querySelectorAll('.seatPosition')

//ticket showing table
let ticketInfoTable = document.querySelector('.ticake_info_table')

//total amount display
let totalAmoutDisplay = document.querySelector('.totalAmount')

//grand total 
let grandTotalDisplay = document.querySelector('.grandTotal')

//ticket price
let ticketprice = 550;

//initial total ticket price
let totalAmount=0;


//clicking all ticket btn
ticketBtns.forEach((ticketBtn)=>{
    ticketBtn.addEventListener('click',()=>{
        
        ticketBtn.className='btn btn-success py-3 px-5 mx-4 seatPosition'

        //getting seat number
        let seatName = ticketBtn.textContent

        //adding price to current amount
        totalAmount=totalAmount+ticketprice;

        //adding booked ticket to table
        bookingTicket(seatName,ticketprice)

        //changing the total amount on table
        totalAmoutDisplay.textContent=totalAmount;

        //changing the grand total
        grandTotalDisplay.textContent=totalAmount;
    })
})

//booking ticket
function bookingTicket(seatName,price){

    //creating tr
    let tr = document.createElement('tr')

    //adding table class list
    tr.className='table bg-transparent'

    //data in td
    tr.innerHTML=`<td class="bg-transparent">${seatName}</td>
    <td class="bg-transparent">Economoy</td>
    <td class="bg-transparent">${price}</td>`

    //adding tr-data to table
    ticketInfoTable.appendChild(tr)
    
}