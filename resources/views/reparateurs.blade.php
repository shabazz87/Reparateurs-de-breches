<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>R2B: Renoncer à soi-même</title>
    <link rel="shortcut icon" href="{{ asset('/media/images_animes/r2blogo.PNG') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div id="app">
      <Myheader></Myheader>
      <Myfooter></Myfooter>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>