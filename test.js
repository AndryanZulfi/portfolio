const myName = 'Andryan Zulfi'
let index = 0
let displayName = ''
let isDeleting = false
function showName(){
    if(!isDeleting){
        if(index < myName.length){
            displayName += myName[index]
            process.stdout.write(displayName);
            index++
            setTimeout(showName, 200)
        }else{
            isDeleting = true
            setTimeout(showName, 1000)
        }
    }else{
        if(index  > 0){
            displayName = myName.slice(0, index)
            console.log(displayName)
            index--
            setTimeout(showName, 200)
        }else{
            isDeleting = false
            setTimeout(showName, 1000)
        }
    }
}

showName()

