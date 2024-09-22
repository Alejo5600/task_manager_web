<!DOCTYPE html>
<html>
<head>
    <title>Laravel con Vue y Vue Router</title>
</head>
<body>
    <div id="app">
        <nav>
            <ul>
                <li><router-link to="/">Tareas</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
