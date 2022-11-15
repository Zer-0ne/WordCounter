document.addEventListener('input', () => {
    str = document.getElementById('text')
    let string = str.value
    // console.log(string)
    let upper_case =special=num= lower_case = space_count = word_count = 0
    // word_count = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 'a' && string[i] <= 'z') {
            lower_case += 1
        }
        else if (string[i] >= 'A' && string[i] <= 'Z') {
            console.log('upper')
            upper_case += 1
        }
        
        else if (string[i] == ' ' && string[i + 1] != ' ') {
            if (string[i] == ' ') {

                space_count += 1
            }
            word_count++
        }
        else if(string[i]>=0&&string[i]<=9){
            num+=1
        }else if(string[i]==''){
            upper_case =special=num= lower_case = space_count = word_count = 0
        }
        else {
            special+=1
        }
        document.getElementById('word').innerHTML = 'Total words: ' + word_count
        document.getElementById('upper').innerHTML = 'Total Upper cases: ' + upper_case
        document.getElementById('lower').innerHTML = 'Total lower cases: ' + lower_case
        document.getElementById('space').innerHTML = 'Total spaces: ' + space_count
        document.getElementById('num').innerHTML = 'Total Numbers: ' + num
        document.getElementById('special').innerHTML = 'Total Special: ' + special
    
    let style = document.createElement('style')
    loading = document.querySelector('.loading')
    style.innerHTML = `
    .loading {
        animation: loading 1s ease infinite;
      }
    @keyframes loading {
        0 % {
            text-shadow: 2px 0px 2px aqua, -2px 0px 4px red;

    }

    25 % {
        text-shadow: 0px 2px 2px aqua, 0px - 2px 2px red;


}
    
        50 % {
        text-shadow: -2px 0px 2px aqua, 2px 0px 2px red;
            
    
        }

75 % {
    text-shadow: 0px - 2px 2px aqua, 0px 2px 2px red;
            
        }

100 % {
    text-shadow: 2px 0px 2px aqua, -2px 0px 2px red;
            
        }
    }
      `
    loading.appendChild(style)}
})
