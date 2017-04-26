    var studentData = [
        {name: "Mayuri Rathod", className: "engineer"},
        {name: "Himanshu Rathod", className:"accountant"}
    ];
    var templateScript = Handlebars.templates.list(studentData);
    console.log('template script', templateScript);
    document.write(templateScript);