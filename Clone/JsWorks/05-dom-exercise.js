for(let i = 1; i<=5 ; i++){
    let h1 = document.createElement('h1')
    h1.className = 'testing'
    h1.style.backgroundColor = 'black'
    h1.style.color = ' #fff'
    h1.textContent = 'This added with Js' + " " + i
    //Basa ekle (append)
    document.body.append(h1)
}
const button = document.getElementById('btn')

button.addEventListener('click' , function(e) {
    console.log('Butona tıkladın!')
    
})