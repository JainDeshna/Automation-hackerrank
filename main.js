const puppeteer=require("puppeteer")
const obj=require('./code')
const loginlink="https://www.hackerrank.com/auth/login"
let browserOpen=puppeteer.launch({
    headless:false,
    args:['--start-maximized'],
    defaultViewport:null

})

let page;
const email="deshnajain9451@gmail.com"
const password="deshna..."
browserOpen.then(function(browserObj)
{
    let browserOpenPromise=browserObj.newPage()
    return browserOpenPromise

}).then(function(newtab)
{
    page=newtab;
    let hackerrankOpenPromise=newtab.goto(loginlink)
    return hackerrankOpenPromise;
}).then(function()
{
let emailIsEntered=page.type("input[id='input-1']",email,{delay:50})

return emailIsEntered
}).then(function()
{
    let passwordIsEntered=page.type("input[type='password']",password,{delay:50})

    return passwordIsEntered 
}).then(function()
{
    let loginbuttonclick=page.click('button[data-analytics="LoginPassword"]')
    return loginbuttonclick
}).then(function()
{
    let clickonalgopromose=waitandclick('.track-card a[data-attr2="algorithms"]',page)
    return clickonalgopromose;
}).then(function()
{
    let getwarmup=waitandclick('input[value="warmup"]',page)
    return getwarmup

})/*.then(function()
{
    let waitforsec=page.waitFor(30000)
    return waitforsec
})*/.then(function()
{
    let allchallengespromise=page.$$('.ui-content.has-icon.align-icon-right')
    return allchallengespromise;
}).then(function(quesarr)
{
    let questionwillbesolved=questionsolver(page,quesarr[0],obj.ans[0])
    return questionwillbesolved
})

function waitandclick(selector,cpage)
{
return new Promise(function(resolve,reject)
{
    let waitformodelpromise=cpage.waitForSelector(selector)
    waitformodelpromise.then(function()
    {
        let clickmodal=cpage.click(selector)
        return clickmodal
    }).then(function()
    {
        resolve()
    }).catch(function(err)
    {
        reject()
    })
    
})
}
function questionsolver(page,question,answer)
{
    return new Promise(function(resolve,reject)
    {
        let questionwillbeclicked=question.click()
        questionwillbeclicked.then(function()
        {
            let editorinfocus=waitandclick('.monaco-editor.no-user-select.vs',page)
            return editorinfocus
        }).then(function()
        {
            return waitandclick(".checkbox-input",page)
        }).then(function()
        {
            return page.waitForSelector('textarea.custominput',page)
        }).then(function()
        {
            return page.type('textarea.custominput',answer,{delay:10})
        }).then(function()
        {
            let CtrlIsPressed=page.keyboard.down('Control')
            return CtrlIsPressed
        }).then(function()
        {
            let AIsPressed=page.keyboard.press('A',{delay:100})
            return AIsPressed;
        }).then(function()
        {
            let XisPressed=page.keyboard.press('X',{delay:100})
            return XisPressed
        }).then(function()
        {
            let ctrlisUnpressed=page.keyboard.up("Control")
            return ctrlisUnpressed;
        }).then(function()
        {
            let maineditorinfocus=waitandclick('.monaco-editor.no-user-select.vs',page);
            return maineditorinfocus;
        }).then(function()
        {
            let CtrlIsPressed=page.keyboard.down('Control')
            return CtrlIsPressed
        })
        .then(function()
        {
            let AisPressed=page.keyboard.press('A',{delay:100})
            return AisPressed
        }).then(function()
        {
            let VisPressed=page.keyboard.press('V',{delay:100})
            return VisPressed
        }).then(function()
        {
            let ctrlisUnpressed=page.keyboard.up("Control")
            return ctrlisUnpressed;
        }).then(function()
        {
            return page.click('.hr-monaco-submit ',{delay:50})
        }).then(function()
        {
            resolve();
        }).catch(function(err)
        {
            reject();
        })
    })
}
