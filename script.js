/* CGPA To Percentage */
const cgpaToPercentage = () => {
  var cgpa = parseFloat(document.getElementById("cgpa").value);
  var gradingSystem = parseFloat(
    document.getElementById("grading-system1").value
  );
  var percentage = 0;
  if (gradingSystem == 4.0) {
    percentage = cgpa * 25;
  } else if (gradingSystem == 5.0) {
    percentage = cgpa * 20;
  } else if (gradingSystem == 10.0) {
    percentage = cgpa * 9.5;
  }
  if (isNaN(percentage) || percentage < 0 || percentage > 100) {
    document.getElementById("cgpa-to-percentage-result").innerHTML =
      "<b>Result</b>: Value out of range";
    document.getElementById("cgpa-to-percentage-result").style.color = "red";
  } else {
    document.getElementById("cgpa-to-percentage-result").innerHTML =
      "<b>Result</b>: " + percentage.toFixed(2) + "%";
    document.getElementById("cgpa-to-percentage-result").style.color = "green";
  }
};

/* Percentage To CGPA */
const percentageToCgpa = () => {
  var percentage = parseFloat(document.getElementById("percentage1").value);
  var gradingSystem = parseFloat(
    document.getElementById("grading-system2").value
  );
  var cgpa = 0;
  if (gradingSystem == 4.0) {
    cgpa = percentage / 25;
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 4) {
      document.getElementById("percentage-to-cgpa-result").style.color = "red";
      document.getElementById("percentage-to-cgpa-result").innerHTML =
        "<b>Result</b>: Value out of range";
    } else {
      document.getElementById("percentage-to-cgpa-result").style.color =
        "green";
      document.getElementById("percentage-to-cgpa-result").innerHTML =
        "<b>Result</b>: " + cgpa.toFixed(2);
    }
  } else if (gradingSystem == 5.0) {
    cgpa = percentage / 20;
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 5) {
      document.getElementById("percentage-to-cgpa-result").style.color = "red";
      document.getElementById("percentage-to-cgpa-result").innerHTML =
        "<b>Result</b>: Value out of range";
    } else {
      document.getElementById("percentage-to-cgpa-result").style.color =
        "green";
      document.getElementById("percentage-to-cgpa-result").innerHTML =
        "<b>Result</b>: " + cgpa.toFixed(2);
    }
  } else if (gradingSystem == 10.0) {
    cgpa = percentage / 9.5;
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      document.getElementById("percentage-to-cgpa-result").style.color = "red";
      document.getElementById("percentage-to-cgpa-result").innerHTML =
        "<b>Result</b>: Value out of range";
    } else {
      document.getElementById("percentage-to-cgpa-result").style.color =
        "green";
      document.getElementById("percentage-to-cgpa-result").innerHTML =
        "<b>Result</b>: " + cgpa.toFixed(2);
    }
  }
};

/* GPA To Percentage */
const gpaToPercentage = () => {
  var gradingSystem = parseFloat(
    document.getElementById("grading-system3").value
  );
  var gpa = parseFloat(document.getElementById("gpa").value);
  // var percentage = gpa * 20;
  if (gradingSystem == 4.0) {
    var percentage = gpa * 25;
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      document.getElementById("gpa-to-percentage-result").style.color = "red";
      document.getElementById("gpa-to-percentage-result").innerHTML =
        "<b>Result</b>: Value out of range";
    } else {
      document.getElementById("gpa-to-percentage-result").style.color = "green";
      document.getElementById("gpa-to-percentage-result").innerHTML =
        "<b>Result</b>: " + percentage.toFixed(2) + "%";
    }
  } else if (gradingSystem == 5.0) {
    var percentage = gpa * 20;
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      document.getElementById("gpa-to-percentage-result").style.color = "red";
      document.getElementById("gpa-to-percentage-result").innerHTML =
        "<b>Result</b>: Value out of range";
    } else {
      document.getElementById("gpa-to-percentage-result").style.color = "green";
      document.getElementById("gpa-to-percentage-result").innerHTML =
        "<b>Result</b>: " + percentage.toFixed(2) + "%";
    }
  } else if (gradingSystem == 10.0) {
    var percentage = gpa * 10;
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      document.getElementById("gpa-to-percentage-result").style.color = "red";
      document.getElementById("gpa-to-percentage-result").innerHTML =
        "<b>Result</b>: Value out of range";
    } else {
      document.getElementById("gpa-to-percentage-result").style.color = "green";
      document.getElementById("gpa-to-percentage-result").innerHTML =
        "<b>Result</b>: " + percentage.toFixed(2) + "%";
    }
  }
};

/* Percentage To GPA */
const percentageToGpa = () => {
  var percentage = parseFloat(document.getElementById("percentage2").value);
  var gradingSystem = parseFloat(
    document.getElementById("grading-system4").value
  );
  if (gradingSystem == 4.0) {
    var gpa = percentage / 25;
    if (isNaN(gpa) || gpa < 0 || gpa > 4) {
      document.getElementById("percentage-to-gpa-result").style.color = "red";
      document.getElementById("percentage-to-gpa-result").innerHTML =
        "Value out of range , should be in the range of 0-100%";
    } else {
      document.getElementById("percentage-to-gpa-result").style.color = "green";
      document.getElementById("percentage-to-gpa-result").innerHTML =
        "<b>Result</b>: " + gpa.toFixed(2);
    }
  } else if (gradingSystem == 5.0) {
    var gpa = percentage / 20;
    if (isNaN(gpa) || gpa < 0 || gpa > 5) {
      document.getElementById("percentage-to-gpa-result").style.color = "red";
      document.getElementById("percentage-to-gpa-result").innerHTML =
        "Value out of range , should be in the range of 0-100%";
    } else {
      document.getElementById("percentage-to-gpa-result").style.color = "green";
      document.getElementById("percentage-to-gpa-result").innerHTML =
        "<b>Result</b>: " + gpa.toFixed(2);
    }
  } else if (gradingSystem == 10.0) {
    var gpa = percentage / 10;
    if (isNaN(gpa) || gpa < 0 || gpa > 10) {
      document.getElementById("percentage-to-gpa-result").style.color = "red";
      document.getElementById("percentage-to-gpa-result").innerHTML =
        "Value out of range , should be in the range of 0-100%";
    } else {
      document.getElementById("percentage-to-gpa-result").style.color = "green";
      document.getElementById("percentage-to-gpa-result").innerHTML =
        "<b>Result</b>: " + gpa.toFixed(2);
    }
  }
};

/* Marks To CGPA */
const marksToCgpa = () => {
  var marksObtained = parseFloat(
    document.getElementById("marks-obtained").value
  );
  var totalMarks = parseFloat(document.getElementById("total-marks").value);
  var gradingSystem = parseFloat(
    document.getElementById("grading-system5").value
  );
  var cgpa = 0;
  if (totalMarks == 0) {
    document.getElementById("marks-to-cgpa-result").style.color = "red";
    document.getElementById("marks-to-cgpa-result").innerHTML =
      "Total marks cannot be zero";
    return;
  }
  var percentage = (marksObtained / totalMarks) * 100;
  if (gradingSystem == 4.0) {
    cgpa = percentage / 25;
  } else if (gradingSystem == 5.0) {
    cgpa = percentage / 20;
  } else if (gradingSystem == 10.0) {
    cgpa = percentage / 9.5;
  }
  if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
    document.getElementById("marks-to-cgpa-result").style.color = "red";
    document.getElementById("marks-to-cgpa-result").innerHTML =
      "Value out of range";
  } else {
    document.getElementById("marks-to-cgpa-result").style.color = "green";
    document.getElementById("marks-to-cgpa-result").innerHTML = cgpa.toFixed(2);
  }
};
