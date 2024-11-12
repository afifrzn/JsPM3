<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cek Angka Positif, Negatif, atau Nol</title>
    <style>
        /* Menyembunyikan panah pada input number */
        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input[type=number] {
            -moz-appearance: textfield;
        }
    </style>
</head>
<body>
    <h2>Masukkan Angka</h2>
    <input type="number" id="angkaInput" placeholder="Masukkan angka" onkeydown="disableArrowKeys(event)" >
    <button onclick="cekAngka()">Cek</button>
    <p id="hasil"></p>

    <script>
        function disableArrowKeys(event) {
            if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                event.preventDefault();
            }
        }

        function cekAngka() {
            const angka = parseFloat(document.getElementById("angkaInput").value);
            
            if (angka > 0) {
                document.getElementById("hasil").textContent = "Angka positif";
            } else if (angka < 0) {
                document.getElementById("hasil").textContent = "Angka negatif";
            } else {
                document.getElementById("hasil").textContent = "Angka nol";
            }
        }
    </script>
</body>
</html>
