function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Script')
        .addItem('Proyectos', 'testPlanProyects')
        .addItem('Cobertura de pruebas', 'coberturaPruebas')
        .addItem('Filtro Test Plan', 'filterGlomo')
        .addToUi();
  }
  
  function doGenerate(e) {
    var ui = SpreadsheetApp.getUi();
    var dialog;
    var html = HtmlService.createHtmlOutputFromFile('RequestForm')
      .setWidth(490)
      .setHeight(400);
    dialog = ui.showModalDialog(html, 'Download Parameters');
  }
  
  
  
  let cookie = "_oauth2_proxy==|1663198532|HxPZdkVejN7jgovhqjH_McePui4=";
  
  
  function casosPlanificados(){
  let url = '';
    let response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        headers: {
          Cookie: cookie
        }
      })
    let res = JSON.parse(response.getContentText());
    //let casosPlanificados = res.issues[0].fields.customfield_14628.count;
    console.log(casosPlanificados);
    for(i=0; i<Object.keys(res.issues).length; i++){
          let array =[]
          let sum = 0;
  
          array[i]=res.issues[i].fields.customfield_14628.count;
           sum = sum + array[i];
           //console.log(sum)
           console.log(sum);
        //work.getRange(i+2,1).setValue(sum);
  
      }
  }
  
  function sheetEnterDate(date1,date2){
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    Logger.log(sheet.getSheets());
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[1]);
    let work = sheet.getActiveSheet();
    let rango1 = work.getRange(2,2)
    let rango2 = work.getRange(3,2);
    rango1.setValue(date1);
    rango2.setValue(date2);
  }
  
  function coberturaPruebas(){
    const casosCerrados = myFunction(urlCasosCerrados,cookie);
    const casosPlanificados = myFunction(urlCasosPlanificados,cookie);
    sheetEnterDate(casosCerrados,casosPlanificados);
  
  }
  
  function myFunctionProjectPlan() {
    try {
      var url = '';
  
      var response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        headers: {
          Cookie: cookie
        }
      })
  
      let res = JSON.parse(response.getContentText());
      let sheet = SpreadsheetApp.getActiveSpreadsheet();
      let work = sheet.getActiveSheet();
      let rango1 = work.getRange(4,1)
      let rango2 = work.getRange(4,2);
      rango1.setValue(res.issues[42].key);
    } catch(e) {
      console.log(e.message);
    }}
  
    function testPlanProyects() {
  
    try {
      var url = '';
  
      var response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        headers: {
          Cookie: cookie
  
        }
      })
      
      let res = JSON.parse(response.getContentText());
      let sheet = SpreadsheetApp.getActiveSpreadsheet();
      let work = sheet.getActiveSheet();
      for(i=0; i<Object.keys(res.issues).length; i++){
        work.getRange(i+2,1).setValue(res.issues[i].key);
  
      }
  
    } catch(e) {
      console.log(e.message);
    }}
  
    function filterPlannig(){
      let sheet = SpreadsheetApp.getActiveSpreadsheet();
      SpreadsheetApp.setActiveSheet(sheet.getSheets()[2]);
      let work = sheet.getActiveSheet();
      let filter = work.getRange(2,1).getValue();
      Logger.log(filter);
      var url = '=issue+in+testPlanTests('+filter+')';
      Logger.log(url);
      var response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        headers: {
          Cookie: cookie
  
        }
      })
  
      let res = JSON.parse(response.getContentText());
      Logger.log(res.total);
      work.getRange(2,2).setValue(res.total);
    }  
  
    function filterClosed(){
      let sheet = SpreadsheetApp.getActiveSpreadsheet();
      SpreadsheetApp.setActiveSheet(sheet.getSheets()[2]);
      let work = sheet.getActiveSheet();
      let filter = work.getRange(2,1).getValue();
      var url = '';
      var response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        headers: {
          Cookie: cookie
  
        }
      })
  
      let res = JSON.parse(response.getContentText());
      Logger.log(res.total);
      work.getRange(2,3).setValue(res.total);
    }  
  
  function filterGlomo(){
    filterPlannig();
    filterClosed();
  }
  
   function testManager(){
      console.log("HelloWorld TestManager!");
  
    try {
      var url = '';
      var response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        headers: {
          Cookie: "_oauth2_proxy=am9zaW1hci5sZW9uLmNvbnRyYWN0b3JAYmJ2YS5jb218T3diUFVuTWk4MnNQNHRXYk0rVlNtVFRZRXMzSGM0N0VwQVN6dmRIMmF3eHpnQzBPdVJlbUJ0OVlxbXRQazgxVDlYRHRXVWpVSkYrbnFnUDFVQk1VOWhiQzRGL1hiZnRBOGxnWHNzcERnSDNiMm1jSVBjaXUrRTlOMzdVMHNPUlhvdkdYb0d4VmRGNG5McDRLMHdIbmx1STZMS253OXl3Y1J3RXhERjlsYlU2NTB6UG1zWHJlUjhqM1YvUmJTR0k2ZTFSWGxPTGJjbC9EYldXaWl2VjNQMlNmd2FrbnNnZXBwTWVFTG9hdGpDdFZYSnRwSWdITDhzTTdxdUlPcmpaZ1NOMWlJd3RGb0xHWDFHbEpBbGJDY0VYbkJFVTNmOFV0SnFUUWQrVDltVGw5SnBCRXhRPT18MTY2MTgxMTc2Nnw=|1661808167|AI7-aQoVelbw33M4rhPXxl-j6hQ="
        }
        
      })
  
    } catch(e) {
      console.log(e.message);
        
    }
  
  }
  
  function countTestCasesQ(){
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
      SpreadsheetApp.setActiveSheet(sheet.getSheets()[3]);
      let work = sheet.getActiveSheet();
      var url = '';
      var response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        headers: {
          Cookie: cookie
        }
      })
  
      let res = JSON.parse(response.getContentText());
      let count = 0;
      let countPass = 0;
      for(i=0; i<Object.keys(res.issues).length; i++){
        Logger.log(res.issues[i].fields.customfield_14628.count);
        count += res.issues[i].fields.customfield_14628.count;
        countPass += res.issues[i].fields.customfield_14628.statuses[0].statusCount;
      }
      Logger.log(count);
      Logger.log(countPass);
      work.getRange(2,2).setValue(count);
      work.getRange(2,3).setValue(countPass);
  }
  
  function testManagerFinal(){
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
      SpreadsheetApp.setActiveSheet(sheet.getSheets()[4]);
      let work = sheet.getActiveSheet();
      var url = '';
      var response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        headers: {
          Cookie: cookie
        }
      })
  
      let res = JSON.parse(response.getContentText());
      let count =0;
      for(i=0; i<Object.keys(res[0].suites[0].tests).length; i++){
         console.log(res[0].suites[0].tests);
         count += res[0].suites[0].tests[i].statistics[0].avg
      }
      Logger.log(count.toFixed(2));
      work.getRange(2,3).setValue(count);
     //let time = res[0].suites[0].tests[3].statistics[0].avg;
     //time = time.toFixed(2);
     //console.log(time);
  }
  
  function testManagerFinal2(){
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
      SpreadsheetApp.setActiveSheet(sheet.getSheets()[4]);
      let work = sheet.getActiveSheet();
      var url = '';
      var response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        headers: {
          Cookie: cookie
        }
      })
  
      let res = JSON.parse(response.getContentText());
      let count =0;
      for(i=0; i<Object.keys(res[0].suites[0].tests).length; i++){
         console.log(res[0].suites[0].tests);
         count += res[0].suites[0].tests[i].statistics[0].avg
      }
      Logger.log(count.toFixed(2));
      work.getRange(2,3).setValue(count.toFixed(2));
     
  }


  function pruebaManual() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[2]);
    let work = sheet.getActiveSheet();
    let project = work.getRange(2, 6).getValue();
    let testSet = work.getRange(2, 5).getValue();
    let url = "roject%20=%20%22"+project+"%22%20AND%20issuetype%20=%20%22Test%20Set%22%20AND%20key%20=%20"+testSet;
    
    var response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      headers: {
        Cookie: cookie
  
      }
    })
  
    let res = JSON.parse(response.getContentText());
    let count = 0;
    for (i = 0; i < Object.keys(res.issues).length; i++) {
      let listTest = res.issues[i].key;
      let url = "";
  
      let response = urlBase(url);
      Logger.log(url)
      for (j = 0; j < Object.keys(response.entries).length; j++) {
  
        //let result = 0;
        Logger.log("start")
        Logger.log(response.entries[j].userColumns.testrun_started);
        Logger.log("fin")
        Logger.log(response.entries[j].userColumns.testrun_finished);
  
        let start = response.entries[j].userColumns.testrun_started;
        let resultStart = start.length !== 0 ? calcularTiempo(response.entries[j].userColumns.testrun_started) : 0;
        Logger.log("result start");
        Logger.log(resultStart);
  
        let finished = response.entries[j].userColumns.testrun_finished;
        let resultFinished = finished.length !== 0 ? calcularTiempo(response.entries[j].userColumns.testrun_finished): 0;
        Logger.log("result finished");
        Logger.log(resultFinished);
  
        let calculate = 0;
        if (resultFinished ===0 || resultStart ===0){
              calculate;
              Logger.log("result finished o started equal 0: "+calculate);
        }else{
           calculate = resultFinished - resultStart;
        }
        
        Logger.log("result metrics");
        count += calculate;
        Logger.log(count);
        
        work.getRange(2, 7).setValue(count);
  
      }
    }
  
  }

  /* Fin */

  

function calcularTiempo(start) {
  var regex = /(\w+)/g;
  let starTime = start.match(regex);
  console.log(starTime);

  let hour = starTime[3];
  console.log(hour);
  let minStart = starTime[4];
  console.log(minStart);
  let day = starTime[5];
  console.log(day);

  if (day == 'PM') {

    hour = parseInt(hour) + 12;
    console.log("Hour PM " + hour);
  }
  console.log("Hour AM " + hour);

  let hourStart = hour * 60
  console.log(hourStart);
  let sumStart = Number(hourStart * 60) + Number(minStart * 60);
  console.log(sumStart);

  return sumStart;

}

function onOpen() {
    let ui = SpreadsheetApp.getUi();
    ui.createMenu('Script')
      .addItem('Pruebas de regresion', 'pruebasRegresion')
      .addItem('Cobertura de pruebas', 'coberturaPruebas')
      .addItem('Test Manager', 'testManager')
      .addItem('Jira Xray', 'jiraXray')
      .addToUi();
  }
  
  let cookie2 = "_oauth2_proxy==|1664295911|=";
  
  
  function urlBase(url) {
    var response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      headers: {
        Cookie: cookie
  
      }
    })
    let res = JSON.parse(response.getContentText());
    return res;
  }
  
  function urlAuth(url) {
    var response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      headers: {
        Authorization: "Basic =="
      }
    })
    let res = JSON.parse(response.getContentText());
    return res;
  }
  
  /* Metricas de PORCENTAJE DE COBERTURA DE PRUEBAS */
  
  function testCoverage() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[1]);
    let work = sheet.getActiveSheet();
    let project = work.getRange(2, 1).getValue();
    let q = work.getRange(2, 2).getValue();
    let testPlan = work.getRange(2, 3).getValue();
  
    let url = "" + project + "%22%20AND%20issuetype%20=%20%22Test%20Plan%22%20AND%20labels%20=%20" + q + "%20AND%20key%20=%20" + testPlan;
    Logger.log(url);
  
    let response = urlBase(url);
  
    Logger.log(response.issues[0].fields.customfield_14628.count);
    Logger.log(response.issues[0].fields.customfield_14628.statuses[0].statusCount);
    work.getRange(2, 5).setValue(response.issues[0].fields.customfield_14628.count);
    work.getRange(2, 4).setValue(response.issues[0].fields.customfield_14628.statuses[0].statusCount);
  }
  
  /* Fin */
  
  /* Metricas de REDUCCION TIEMPOS EJECUCION DE PRUEBAS DE REGRESION */
  function testManual() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[2]);
    let work = sheet.getActiveSheet();
    let testSet = work.getRange(2, 5).getValue();
    let project = work.getRange(2, 6).getValue();
  
    let url = "" + project + "%22%20AND%20issuetype%20=%20%22Test%20Set%22%20AND%20key%20=%20" + testSet;
    Logger.log(url);
  
    let response = urlBase(url);
  
    let timespent = response.issues[0].fields.timespent
    console.log(timespent);
    work.getRange(2, 8).setValue(timespent);
    let executedCases = response.issues[0].fields.customfield_14612.length;
    console.log(executedCases);
    work.getRange(2, 7).setValue(executedCases);
  
  
  }
  
  function testAutomated() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[2]);
    let work = sheet.getActiveSheet();
    let project = work.getRange(2, 2).getValue();
    let branch = work.getRange(2, 3).getValue();
    let environment = work.getRange(2, 4).getValue();
    let feature = '@' + work.getRange(2, 5).getValue();
    let executions = getLastRun();
    let url = "" + project + "/" + environment + "/" + branch + "/executions/" + executions;
  
    console.log(url);
    let response = urlBase(url);
  
    let count = 0;
    for (i = 0; i < Object.keys(response[0].suites).length; i++) {
      let tagFeature = response[0].suites[i].executions[0].tests[0].metadata.tags[1];
      console.log(tagFeature);
      if (tagFeature == feature) {
        console.log(tagFeature);
        let executedCases = response[0].suites[i].tests.length;
        console.log(executedCases);
        work.getRange(2, 9).setValue(executedCases);
        for (j = 0; j < Object.keys(response[0].suites[i].tests).length; j++) {
          let timeTag = response[0].suites[i].tests[j].statistics[0].avg;
          console.log(timeTag);
          count += timeTag;
        }
        console.log(count.toFixed(2));
        work.getRange(2, 10).setValue(Math.round(count));
      }
    }
  
  }
  
  function testRegression() {
    testManual();
    testAutomated();
  }
  
  /* Fin */
  
  function incidentServiceNow() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[1]);
    let work = sheet.getActiveSheet();
  
    let url = "";
    Logger.log(url);
  
    var response = urlAuth(url)
  
    for (i = 0; i < Object.keys(response.result).length; i++) {
      let result = response.result[i].short_description;
      console.log(result);
      //work.getRange(i + 6, 2).setValue(result);
    }
  }
  
  function testEffectivens() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[3]);
    let work = sheet.getActiveSheet();
    let testPlan = work.getRange(2, 3).getValue();
    let q = work.getRange(2, 2).getValue();
    let project = work.getRange(2, 1).getValue();
    let count = 0;
    let countQa = 0;
  
    let url = "" + project + "%22%20AND%20issuetype%20=%20%22Test%20Plan%22%20AND%20labels%20=%20" + q + "%20AND%20key%20=%20" + testPlan;
    Logger.log(url);
  
    let response = urlBase(url);
  
    listTestPlanTest = response.issues[0].fields.customfield_14626;
    console.log(listTestPlanTest);
    console.log(listTestPlanTest.length)
    for (i = 0; i < Object.keys(listTestPlanTest).length; i++) {
      let listTest = listTestPlanTest[i];
      console.log("Inicio");
      console.log(listTest);
      let url = "" + listTest + "%22)";
  
      let response = urlBase(url);
      console.log(url);
      console.log(response.total);
      if (response.total > 0) {
        for (j = 0; j < Object.keys(response.issues).length; j++) {
          let label = response.issues[j].fields.labels;
          let status = response.issues[j].fields.status.name;
          console.log(label);
          console.log(status);
          if (status === "Accepted" && label[0] === "cliente") {
            count = count + 1;
            console.log("Bugs Client: " + count);
  
          } else if (status === "Accepted" && label[0] !== "cliente") {
            countQa = countQa + 1;
            console.log("Bugs QA: " + countQa);
          } else {
            console.log("No tienes bugs aceptados");
          }
        }
      } else {
        console.log("No tienes bugs");
      }
    }
    work.getRange(2, 5).setValue(count);
    work.getRange(2, 4).setValue(countQa);
  }
  
  /* Dashboard */
  function getLastRun() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[0]);
    let work = sheet.getActiveSheet();
    let country = work.getRange(3, 1).getValue();
    let project = work.getRange(3, 2).getValue();
    let branch = work.getRange(3, 3).getValue();
    let environment = work.getRange(3, 4).getValue();
  
    let url = "" + country + "/applications/" + project + "/" + environment + "/" + branch + "/executions/";
    Logger.log(url);
  
    let response = urlBase(url);
  
    let ultimaExecution = response[0].id;
    console.log(ultimaExecution);
    return ultimaExecution;
  
  }
  
  function testManager() {
  
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[0]);
    let work = sheet.getActiveSheet();
    let country = work.getRange(3, 1).getValue();
    let project = work.getRange(3, 2).getValue();
    let environment = work.getRange(3, 4).getValue();
    let branch = work.getRange(3, 3).getValue();
    let executions = getLastRun();
  
    let url = "" + country + "/applications/" + project + "/" + environment + "/" + branch + "/executions/" + executions;
    Logger.log(url);
  
    let response = urlBase(url);
  
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[5]);
    work = sheet.getActiveSheet();
    work.getRangeList(['E3:E200', 'E3:E200']).clear();
    for (i = 0; i < Object.keys(response[0].suites).length; i++) {
      let tagFeature = response[0].suites[i].executions[0].tests[0].metadata.tags[1];
      const newStr = tagFeature.slice(1)
      console.log(newStr);
      console.log(tagFeature);
      work.getRange(i + 3, 5).setValue(newStr);
  
    }
  
  }
  
  /* Fin */
  
  function testManagerDashboard() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[5]);
    let work = sheet.getActiveSheet();
  
    var url = '';
    Logger.log(url);
  
    let response = urlBase(url);
  
    let count = 2;
    let countEnv = 2;
    let countRama = 2;
  
    for (var i in response) {
      var key = i;
      console.log(key);
      var val = response[i];
      work.getRange(count = count + 1, 2).setValue(key);
      console.log(count);
      for (var j in val) {
        var sub_key = j;
        var sub_val = val[j];
        console.log(sub_key);
        work.getRange(countEnv = countEnv + 1, 4).setValue(sub_key);
  
        for (var n in sub_val) {
          var subkey2 = n;
          let subkey2rep = subkey2.replace('/', '~~');
          console.log(subkey2rep);
          work.getRange(countRama = countRama + 1, 3).setValue(subkey2rep);
        }
      }
    }
  }
  
  
  
  function jiraXray() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[0]);
    let work = sheet.getActiveSheet();
    let project = work.getRange(3, 6).getValue();
    console.log(project);
    let url = "project%20=%20%22" + project + "%22%20AND%20issuetype%20=%20%22Test%20Plan%22";
    Logger.log(url);
  
    let response = urlBase(url);
  
    SpreadsheetApp.setActiveSheet(sheet.getSheets()[5]);
    work = sheet.getActiveSheet();
    work.getRangeList(['G3:G200', 'H3:H200']).clear();
  
    for (i = 0; i < Object.keys(response.issues).length; i++) {
      let testPlan = response.issues[i].key;
      let q = response.issues[i].fields.labels;
      work.getRange(i + 3, 7).setValue(testPlan);
      work.getRange(i + 3, 8).setValue(q);
      console.log(testPlan);
      console.log(q);
    }
  }