<!DOCTYPE html>
<html lang="en">
<head>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    @env('prodution')
      <link href="{{ mix('app.css') }}" rel="stylesheet" />
    @endenv

    @env('local')
      <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    @endenv
  </head>
</head>
<body class="bg-grey-lightest m-0 p-0 font-sans">
  <div id="app"></div>





  @env('prodution')
  <script charset="utf8" src="{{ mix('App.js') }}"></script>
  <script charset="utf8" src="{{ mix('vendors~App.js') }}"></script>
  @endenv

  @env('local')
  <script charset="utf8" src="{{ asset('/js/App.js') }}"></script>
  <script charset="utf8" src="{{ asset('/js/vendors~App.js') }}"></script>
  @endenv



  <script type="text/javascript" src="http://127.0.0.1:8000/widget.js"></script>

  <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
  <script type="text/javascript">
      Paddle.Setup({"vendor":114252});
  </script>

  <script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
{{--  <script type="text/javascript">--}}
{{--      gapi.load('auth2', function() {--}}
{{--          // Library loaded.--}}
{{--      });--}}
{{--  </script>--}}



</body>
</html>
