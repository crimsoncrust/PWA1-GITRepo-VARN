
//fixed syntax error's.  having problem querying db database will continue to work on it next week
(function() {

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    //DOM element shown here 
    var resultsDIV = document.getElementById("results"),
    //return forms array
    	searchInput = document.forms[0].search,
    	//shows a empty string when starting search
    	currentSearch = '';
	//beginning function
    // Validates search query
    //fixed misspelling
    var validate = function(query) {
       
        
        //this was new to me had to look it up what we are doing is just what it says removing white space, i read online using jquerry is a better way of doing this?//
        // Trim whitespace from start and end of search query
        //thought this needed to be query.trim but did not know how to do it properly :(
        //begin while loop never heared of charAt before until I googled it and it is just a method for returning i believe 
        while (query.charAt(0) === " ") {
        	//using search terms from string the one i think is start the query.length is the length before it ends
            query = query.substring(1, query.length);
        }
        //begin while loop using charAt method again 
        while (query.charAt(query.length - 1) === " ") {
        //starts at 0 for the array
            query = query.substring(0, query.length - 1);
             //removed unnecessary semi colon 
        }
        // Check search length, must have 3 characters
        //made sure the characters were 3 when you click in search bar to search 
        if (query.length < 3) {
        //add alert command to inform user if they don't meet requirements
            alert("Your search query is too small, try again.");
        }
        // (DO NOT FIX THE LINE DIRECTLY BELOW)
        //puts focus on the search box
        searchInput.focus();
        search(query);

    };

	//begin query search to find match's
    // Finds search matches
    var search = function(query) {
		//had to add the split to this
        // split the user's search query string into an array
        var queryArray = query.split.join(" ");
	
        // array to store matched results from database.js
        var results = [];
        // loop through each index of db array
        for (var i = 0, j = db.length; i < j; i++) {

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            //does not tie into the search correctly **
            var dbItems = db[i].toLowerCase().substring(0, dbTitleEnd);          
        }
        
        // loop through the user's search query words
        // save a lowercase variable of the search keyword
        //if ii is less than the length of the query add 1 and re loop
        for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
            var qItem = queryArray[ii].toLowerCase();

            // is the keyword anywhere in the video title?
            // If a match is found, push full db[i] into results array
            var compare = dbitem.indexOf(qItem);
            //the item can't be equal to -1 
            if (compare !== -1) {
            //results are put into the db array
                results = results.push(db[i]);
            }
			//sorts the array
            results.sort();

        }
    };

    // Check that matches were found, and run output functions

    // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	//start function
    var noMatch = function() {
		//shows no results in function 
        var html = '' + '<p>No Results found.</p>' + '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';
        resultsDIV.innerHTML = html;
    };

    // Put matches into page as paragraphs with anchors
	//console logs number of results
    var showMatches = function(results) {
        console.log("4");

        // THE NEXT 4 LINES ARE CORRECT.
        var html = '<p>Results</p>',
        title,
        url;

        // loop through all the results search() function
        for (var i = 0, j = results.length; i < j; i++) {

            // title of video ends with pipe
            // pull the title's string using index numbers
            var titleEnd = results[i].indexOf('|');
            title = results[i].subString(0, titleEnd);

            // pull the video url after the title
            url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);

            // make the video link - THE NEXT LINE IS CORRECT.
            html += '<p><a href=' + url + '>' + title + '</a></p>';

            resultsDIV.innerHTML = html;
            }

        if (results.length === 0) {
            noMatch();
        } else {
            showMatches(results);
        }
    };
    //start program here//
    // The onsubmit event will be reviewed in upcoming Course Material.
    // THE LINE DIRECTLY BELOW IS CORRECT
    document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        //validate misspelling fixed
        validate(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };

})();