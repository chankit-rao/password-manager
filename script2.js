





document.getElementById('save').addEventListener('click',(event) =>{
    event.preventDefault();
    let passwords = localStorage.getItem('passwords')
    if(passwords == null)
        {
            let json = []
            json.push({
                website: website.value,
                username: username.value,
                password: password.value                
            })
            localStorage.setItem("passwords",JSON.stringify(json))
        
        }

    else{
        let json = []
        json.push({
            website: website.value,
                username: username.value,
                password: password.value 
        })
        localStorage.setItem("passwords",JSON.stringify(json))
    }

    showPasswords();
})
showPasswords()
function showPasswords(){
    let tb = document.querySelector('table')
    let data = localStorage.getItem("passwords")

    if(data == null)
        {
            tb.innerHTML = 'no Data found'
        }
    else{
        tb.innerHTML = `<tr>
        <td>Website</td>
        <td>Username</td>
        <td>password</td>
        <td>delete</td>
        </tr>`

        let arr = JSON.parse(data)
        let str = "";

        for(let i=0; i<arr.length; i++)
            {
                const element = arr[i];

                str += `<tr>
                <td>${element.website}</td>
                <td>${element.username}</td>
                <td>${element.password}</td>
                <td>"delete"</td>
                </tr>`
            }
        
            tb.innerHTML = tb.innerHTML + str
    }

}