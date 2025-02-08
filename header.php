<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nizoral</title>
    <!-- owl carousel  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- owl carousel  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <link rel="stylesheet" href="css/style.css?v=10">
    <link rel="stylesheet" href="css/media.css?v=10">
    <link rel="stylesheet" href="css/inner-pages.css?v=10">

    <!-- <style>
        html,
        body {
            margin: 0;
            padding: 0;
            height: 100%;
            scroll-behavior: smooth;
            overflow: hidden;
            /* Prevent default scrolling */
        }

        section {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            scroll-snap-align: start;
        }

        .container-custom,
        .container-fluid {
            width: 100%;
            height: 100%;
        }

        body {
            scroll-snap-type: y mandatory;
            /* Snap scrolling */
        }
    </style> -->
    <style>
        .sidenav {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 100;
            top: 0;
            right: 0;
            background-color: #ffcc00;
            overflow-x: hidden;
            padding-top: 60px;
            transition: 0.5s;
            box-shadow: -3px -3px 12px 2px #ffffff52;
        }

        /* The navigation menu links */
        .sidenav a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 18px;
            color: #212427;
            display: block;
            transition: 0.3s
        }

        /* When you mouse over the navigation links, change their color */
        .sidenav a:hover,
        .offcanvas a:focus {
            color: #f1f1f1;
        }

        /* Position and style the close button (top right corner) */
        .sidenav .closebtn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
        }

        header.header-collapsed .navbar-nav,
        header.header-collapsed .navbar-collapse {
            display: none !important;
        }

        header.header-collapsed .navbar-toggler {
            border: none;
            outline: none;
        }

        .navbar-toggler:focus {
            box-shadow: none;
        }
    </style>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg pt-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.php"><img src="image/Nizoral.png" alt="Nizoral"></a>
                <button class="navbar-toggler d-lg-none sprinkles" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation" onclick="openSideNav()">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-md-5">
                        <li class="nav-item">
                            <a class="nav-link sprinkles" aria-current="page" href="dandruff-education.php">Dandruff
                                Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link sprinkles" href="nizoral-range.php">Nizoral Range</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link sprinkles" href="scalp-hair-hub.php">Scalp & Hair Hub</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link sprinkles" href="scalp-quiz-1.php">Get to Know Your Scalp</a>
                        </li>
                    </ul>
                    <div class="buyNow">
                        <button class="sprinkles"><a href="buy-online.php" class="text-blue text-decoration-none">BUY NOW</a></button>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="dandruff-education.php">Dandruff Education</a>
        <a href="nizoral-range.php">Nizoral Range</a>
        <a href="scalp-hair-hub.php">Scalp & Hair Hub</a>
        <a href="scalp-quiz-1.php">Get to Know Your Scalp</a>
        <a href="buy-online.php">BUY NOW</a>
    </div>

    <script>
        function openSideNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

        /* Set the width of the side navigation to 0 */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    </script>