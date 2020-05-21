<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body >

<button id="btn" style="width:100px;background-color: green;" ">Button</button>

<script>

    if (document.getElementById("btn") !== null) {
        let rvTrigger = document.getElementById("btn").addEventListener("click", function () {
            console.log("click me btn");
        })

    }




</script>


</body>
</html>