Normally used with loop. Let's make it an ex of a web page that has multiple <li> inside and out of a couple of <ul> or <ol>:
>> const allLis = document.querySelectorAll('li');
Selected all <li> and now to change and work on all of them:
>> for(let i = 0; i < allLis.length; i++) {
    allLis[i].innerText = 'Hello'
}
One way, where I've change all <li> to say Hello, and another way
>>for (let li of allLis) {
    li.innerHTML = '<b>Hello</b>'
}
This way I can pass the bold tag <b> being part of the HTML
