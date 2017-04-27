/*
Main Java Script File
 */

var helper = {
    getProperty: function() {
        var propertyList = [ 'forcetouch', 'geolocation', 'touchevents', 'arrow'];
        var result = [];
        result['header'] = ['Property', 'BrowserSupport', 'description'];
        result['footer'] = [];
        propertyList.forEach( (property) => {
            let description;
            if(Modernizr[property]) {
                description = 'Working';
            } else {
                description = "Not Working";
            }
            propertyArray = [property, Modernizr[property], description];
            result['footer'].push(propertyArray);
        });
        var templateScript = Handlebars.templates.table(result);
        document.getElementById('property').innerHTML = templateScript;
        return;
    },
}


$(document).ready(function() {
    helper.getProperty();
    $()
})
