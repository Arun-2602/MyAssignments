function launchBrowser() {
    let browserName = 'chrome'
    if (browserName === 'chrome') {
        console.log("Browser name is chrome");
    } else {
        console.log("Browser name is not in the list");
    }
}


function runTests() {
    let testType = 'smoke'
    switch (testType) {
        case 'smoke':
            console.log("Test name is smoke");
            break;
        case 'sanity':
            console.log("Test name is sanity");
            break;
        case 'regression':
            console.log("Test name is regression");
            break;
        default:
            console.log("Default test name is smoke");
            break;
    }
}
//Function calling
launchBrowser()
runTests()
