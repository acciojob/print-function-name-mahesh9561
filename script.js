 function functionName() {
            alert(arguments.callee.name);
        }

        // Call the function to display its own name
        functionName();