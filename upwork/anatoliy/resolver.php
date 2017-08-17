<?php
/**
 * Created with love by kent1ukr
 */
$DB_config = [
    'servername' => "localhost",
    'username' => "nfb3806a_config",
    'password' => "3216732167",
    'dbname' => "nfb3806a_config",
];
$inputIndex = 111;
if (isset($_GET['index'])) {
    $inputIndex = $_GET['index'];
}
function getPerformanceDataFromSQL($DB_config)
{
    $servername = $DB_config["servername"];
    $username = $DB_config['username'];
    $password = $DB_config['password'];
    $dbname = $DB_config['dbname'];
//    die($servername . " + " .  $username . " + " .  $password . " + " .  $dbname);
    $performances = array();
    $conn = new mysqli($servername, $username, $password, $dbname) or die($conn);
    $query = "SELECT * FROM (
              SELECT * FROM `performances` ORDER BY id DESC LIMIT 54
              ) sub ORDER BY id ASC";
    if (!$conn) {
        die(var_dump($conn));
    } else {
        $result = mysqli_query($conn, $query) or die (mysqli_error($conn));
        if (!$result) {
            $message = 'Неверный запрос: ' . mysql_error() . "\n";
            $message .= 'Запрос целиком: ' . $query;
            die($message);
        }
        $index = 0;
        while ($row = mysqli_fetch_row($result)) {
            $performances[0][$index] = floatval($row[2]);
            $performances[1][$index] = floatval($row[3]);
            $performances[2][$index] = floatval($row[4]);
            $performances[3][$index] = floatval($row[5]);
            $performances[4][$index] = floatval($row[6]);
            $performances[5][$index] = floatval($row[7]);
            $performances[6][$index] = floatval($row[8]);
            $performances[7][$index] = floatval($row[9]);
            $performances[8][$index] = floatval($row[10]);
            $performances[9][$index] = floatval($row[11]);
            $performances[10][$index] = ($row[1]);
            $index++;
        }

    }
    return $performances;
}

function getRiskDataFromSQL($DB_config)
{
    $servername = $DB_config["servername"];
    $username = $DB_config['username'];
    $password = $DB_config['password'];
    $dbname = $DB_config['dbname'];
//    die($servername . " + " .  $username . " + " .  $password . " + " .  $dbname);
    $performances = array();
    $conn = new mysqli($servername, $username, $password, $dbname) or die($conn);
    $query = "SELECT * FROM (
              SELECT * FROM `risks` ORDER BY id DESC LIMIT 13
              ) sub ORDER BY id ASC";
    if (!$conn) {
        die(var_dump($conn));
    } else {
        $result = mysqli_query($conn, $query) or die (mysqli_error($conn));
        if (!$result) {
            $message = 'Неверный запрос: ' . mysql_error() . "\n";
            $message .= 'Запрос целиком: ' . $query;
            die($message);
        }
        $index = 0;
        while ($row = mysqli_fetch_row($result)) {
            $risks[0][$index] = floatval($row[2]);
            $risks[1][$index] = floatval($row[3]);
            $risks[2][$index] = floatval($row[4]);
            $risks[3][$index] = floatval($row[5]);
            $risks[4][$index] = floatval($row[6]);
            $risks[5][$index] = floatval($row[7]);
            $risks[6][$index] = floatval($row[8]);
            $risks[7][$index] = floatval($row[9]);
            $risks[8][$index] = floatval($row[10]);
            $risks[9][$index] = floatval($row[11]);
            $risks[10][$index] = ($row[1]);
            $index++;
        }

    }
    return $risks;
}

//
//$performances = [
//    /*'leoAPerformance' => */
//    [-0.39, 3.56, 1.32, -1.60, -2.04, 0.63, 0.50, 2.01, -0.84, -0.18, -1.40, -0.37, 2.68, 0.27, 2.47, 0.59, 0.55, -0.11, 1.86, -0.96, 0.39, 1.08, -0.51, -1.66, 1.64, 0.01, 0.00, 0.21, 0.85, 0.14, -2.28, 0.05, 0.57, 0.62, 0.08, 2.15, 0.27, 0.48, 0.21, 0.87, 0.48, -0.29, 0.49, -0.26, 0.19, -1.04, 0.35, 0.68, -0.38, 0.30, -0.27, 0.87, -0.20, -0.29],
//    /*'leoTPerformance' => */
//    [-0.30, 2.83, 1.10, -1.31, -1.62, 0.49, 0.41, 1.61, -0.68, -0.14, -1.12, -0.29, 2.13, 0.22, 2.09, 0.50, 0.41, -0.09, 1.72, -0.84, 0.29, 0.90, -0.30, -1.54, 1.47, -0.05, 0.02, 0.10, 0.81, 0.12, -1.98, 0.08, 0.44, 0.53, 0.04, 1.93, 0.24, 0.41, 0.19, 0.22, 0.39, -0.22, 0.45, -0.29, 0.19, 0.43, 0.33, 0.59, -0.39, 0.29, -0.25, 0.77, -0.18, -0.25],
//    /*'altPerformance' => */
//    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    /*'midgradeE10Performance' => */
//    [0.00, 1.25, 0.91, 0.18, -0.39, 0.20, 0.25, 0.56, 0.41, 0.53, -0.68, -0.21, 1.25, 0.23, 0.24, -0.06, 0.31, 0.31, 0.71, -0.10, 0.19, 0.16, 0.18, -0.51, 0.91, -0.13, 0.07, 0.24, 0.21, -0.12, -0.16, -0.52, 0.13, 0.15, 0.11, 0.39, 0.37, 0.04, 0.26, 0.29, 0.21, 0.18, 0.15, 0.39, -0.02, 0.21, 0.27, 0.08, -0.29, -0.08, -0.11, 0.27, 0.04, 0.02],
//    /*'midgradeE20Performance' => */
//    [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.16, 0.13, 0.21, -0.04, 0.24, 0.16, 0.51, -0.04, 0.11, 0.10, 0.09, -0.32, 0.48, -0.09, 0.06, 0.17, 0.13, -0.04, -0.13, -0.25, 0.02, 0.12, -0.02, 0.62, 0.35, 0.14, 0.11, 0.38, 0.13, 0.16, 0.17, 0.25, 0.08, 0.11, 0.26, 0.13, -0.27, -0.09, -0.10, 0.22, 0.12, 0.02],
//    /*'midgradeAC10Performance' => */
//    [0.00, 1.20, 0.79, -0.66, -0.22, 0.24, 0.28, 0.57, 0.51, -0.04, -0.44, 0.33, 0.82, 0.31, -0.26, -0.11, -0.06, -0.01, 0.44, -0.26, 0.15, -0.08, 0.64, -0.50, 0.55, 0.35, 0.00, 0.32, 0.38, 0.49, -0.91, 0.10, 0.81, 0.34, 0.21, 0.88, 0.40, 0.10, 0.01, 0.31, -0.25, 0.44, -0.23, 0.20, 0.41, 0.02, -0.27, 0.81, 0.22, 0.13, 0.01, 0.70, 0.28, 0.04],
//    /*'midgradeAC20Performance' => */
//    [0.00, 1.34, 0.70, -1.45, -0.19, 0.25, 0.07, 0.34, 0.34, 0.32, -0.67, 0.08, 0.80, 0.28, 0.24, 0.04, 0.06, 0.13, 0.65, -0.31, 0.33, 0.17, 0.38, -0.55, 0.77, 0.14, 0.19, 0.43, 0.56, 0.35, -0.76, 0.03, 0.67, 0.43, 0.08, 0.59, 0.70, 0.21, -0.13, 0.34, 0.01, 0.33, -0.03, 0.20, 0.52, -0.17, 0.14, 0.60, -0.06, -0.19, -0.10, 0.66, 0.26, 0.04],
//    /*'midgradeAC30Performance' => */
//    [1.28, 0.94, -1.22, -0.31, 0.24, 0.03, 0.62, 0.10, 0.05, -0.85, -0.01, 0.94, 0.05, 0.56, 0.23, 0.23, 0.17, 1.06, -0.33, 0.40, 0.37, 0.31, -0.60, 0.74, 0.24, 0.11, 0.54, 0.76, 0.26, -0.86, 0.18, 0.84, 0.42, -0.15, 0.96, 0.60, 0.41, -0.14, 0.25, -0.03, 0.37, 0.05, 0.22, 0.69, 0.12, 0.17, 0.59, -0.22, -0.25, -0.16, 0.68, 0.31, 0.04, 0.00],
//    /*'aktienPerformance' => */
//    [2.28, 4.84, 3.00, -3.20, -3.24, -1.39, -0.48, 1.82, -0.04, -1.96, -2.87, -1.37, 0.31, -2.37, 4.69, 0.85, 0.50, -1.67, 2.92, -1.14, 1.10, 1.13, 1.13, -5.23, 2.84, -0.85, 1.81, 1.16, 3.15, -0.32, -3.92, 0.18, 1.60, 2.64, -0.10, 4.62, -1.09, -0.90, 0.71, 3.81, 1.17, 0.30, 11.90, -0.90, -7.10, -0.53, 0.72, 2.36, -1.49, 2.22, -1.23, 3.54, -0.81, 0.24],
//    /*'ETFPerformance' => */
//    [1.12, 3.35, 0.66, 1.26, -2.45, 0.81, 0.42, 2.84, -0.99, -0.18, -2.23, 2.85, 3.39, 0.32, 1.90, 1.41, -1.58, 0.65, 0.47, -1.37, 1.36, 0.98, -0.37, -1.86, 1.88, -0.33, 0.48, 0.11, 1.24, -0.91, -3.49, 1.67, 2.34, 1.07, -1.10, 3.20, 0.93, -0.49, -0.01, 1.38, -0.14, -0.81, 0.97, -0.84, 1.16, 0.81, 0.22, 0.97, -0.94, 0.26, -0.39, 0.74, 0.40, -1.06],
////    dates
//    ['2016-04-10', '2016-04-15', '2016-04-22', '2016-04-29', '2016-05-06', '2016-05-13', '2016-05-20', '2016-05-27', '2016-06-03', '2016-06-10',
//        '2016-06-17', '2016-06-24', '2016-07-01', '2016-07-08', '2016-07-15', '2016-07-22', '2016-07-29', '2016-08-05', '2016-08-12', '2016-08-19',
//        '2016-08-26', '2016-09-02', '2016-09-09', '2016-09-16', '2016-09-23', '2016-09-30', '2016-10-07', '2016-10-14', '2016-10-21', '2016-10-28',
//        '2016-11-04', '2016-11-11', '2016-11-18', '2016-11-25', '2016-12-02', '2016-12-09', '2016-12-16', '2016-12-23', '2016-12-30', '2017-01-06',
//        '2017-01-13', '2017-01-20', '2017-01-27', '2017-02-03', '2017-02-10', '2017-02-17', '2017-02-24', '2017-03-03', '2017-03-10', '2017-03-17',
//        '2017-03-24', '2017-03-31', '2017-04-07', '2017-04-10'],
//];
function loadInfoInDb($performances, $DB_config)
{
    $servername = $DB_config['servername'];
    $username = $DB_config['username'];
    $password = $DB_config['password'];
    $dbname = $DB_config['dbname'];

    $conn = new mysqli($servername, $username, $password, $dbname);
    if (!$conn) {
        die(var_dump($conn));
    } else {
//        die(var_dump($conn));
        echo("connected");
//        for($i = 0; $i < sizeof($performances[0]); $i++){
//                $query = "INSERT INTO `performances` (`id`, `Date`, `leoAPerformance`, `leoTPerformance`, `altPerformance`, `midgradeE10Performance`,
//            `midgradeE20Performance`, `midgradeAC10Performance`, `midgradeAC20Performance`, `midgradeAC30Performance`, `aktienPerformance`,
//            `ETFPerformance`) VALUES (NULL, '" . $performances[10][$i] . "', '" . $performances[0][$i] . "', '" . $performances[1][$i] . "', '" . $performances[2][$i] . "',
//                '" . $performances[3][$i] . "', '" . $performances[4][$i] . "', '" . $performances[5][$i] . "', '" . $performances[6][$i] . "', '" . $performances[7][$i] . "',
//                '" . $performances[8][$i] . "', '" . $performances[9][$i] . "');";
//                if ($conn->query($query) === TRUE) {
//                    echo "New record created successfully";
//                } else {
//                    die (var_dump($conn));
//                }
//            echo ($i ."\n " . $performances[10][$i] . "\n " . $performances[0][$i] . " " . $performances[1][$i] . " " . $performances[2][$i] .
//                "\n " . $performances[3][$i] . " " . $performances[4][$i] . " " . $performances[5][$i] . "\n "
//                . $performances[6][$i] . " " . $performances[7][$i] . " " . $performances[8][$i] . " " . $performances[9][$i] . "\n\n\n");
//        };
        $conn->close();
        die("inserted");
    }
}

function loadRisksInDb($risks, $DB_config)
{
    $servername = $DB_config['servername'];
    $username = $DB_config['username'];
    $password = $DB_config['password'];
    $dbname = $DB_config['dbname'];

    $conn = new mysqli($servername, $username, $password, $dbname);
    if (!$conn) {
        die(var_dump($conn));
    } else {
//        die(var_dump($conn));
        echo("connected");
        for ($i = 0; $i < sizeof($risks[0]); $i++) {
            $query = "INSERT INTO `risks` (`id`, `Date`, `leoARisk`, `leoTRisk`, `altRisk`, `midgradeE10Risk`,
            `midgradeE20Risk`, `midgradeAC10Risk`, `midgradeAC20Risk`, `midgradeAC30Risk`, `aktienRisk`,
            `ETFRisk`) VALUES (NULL, '" . $risks[10][$i] . "', '" . $risks[0][$i] . "', '" . $risks[1][$i] . "', '" . $risks[2][$i] . "',
                '" . $risks[3][$i] . "', '" . $risks[4][$i] . "', '" . $risks[5][$i] . "', '" . $risks[6][$i] . "', '" . $risks[7][$i] . "',
                '" . $risks[8][$i] . "', '" . $risks[9][$i] . "');";
            if ($conn->query($query) === TRUE) {
                echo "New record created successfully";
            } else {
                die (var_dump($conn));
            }
//            echo ($i ."\n " . $performances[10][$i] . "\n " . $performances[0][$i] . " " . $performances[1][$i] . " " . $performances[2][$i] .
//                "\n " . $performances[3][$i] . " " . $performances[4][$i] . " " . $performances[5][$i] . "\n "
//                . $performances[6][$i] . " " . $performances[7][$i] . " " . $performances[8][$i] . " " . $performances[9][$i] . "\n\n\n");
        };
        $conn->close();
        die("inserted");
    }
}

$risks = [
    /*'leoARisk' => */
    [5.80, 4.90, 9.11, 5.99, 4.35, 4.26, 2.84, 3.44, 2.44, 2.17, 1.98, 2.09, 1.55],
    /*'leoTRisk' => */
    [4.61, 3.90, 7.28, 4.77, 3.51, 3.51, 2.31, 2.80, 2.01, 1.79, 1.63, 1.69, 1.26],
    /*'altRisk' => */
    [5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00],
    /*'midgradeE10Risk' => */
    [1.85, 1.44, 2.02, 1.95, 1.24, 1.27, 0.86, 1.18, 0.77, 0.76, 0.75, 0.58, 0.57],
    /*'midgradeE20Risk' => */
    [0, 0, 0, 0.95, 0.68, 0.71, 0.50, 0.68, 0.74, 0.64, 0.58, 0.47, 0.40],
    /*'midgradeAC10Risk' => */
    [2.40, 1.83, 1.50, 1.59, 1.48, 1.45, 1.15, 1.30, 1.02, 1.17, 3.10, 2.18, 1.72],
    /*'midgradeAC20Risk' => */
    [2.74, 2.01, 1.85, 1.40, 1.26, 1.21, 0.98, 1.20, 1.08, 1.00, 2.47, 1.67, 1.37],
    /*'midgradeAC30Risk' => */
    [2.42, 1.98, 1.99, 1.46, 1.37, 1.22, 1.07, 1.36, 1.30, 1.29, 2.34, 1.59, 1.35],
    /*'aktienARisk' => */
    [8.08, 8.81, 14.90, 10.50, 6.56, 6.39, 6.32, 6.80, 5.21, 12.92, 7.54, 6.69, 4.81],
    /*'ETFARisk' => */
    [6.57, 6.75, 9.50, 4.78, 5.27, 5.30, 4.56, 4.75, 4.13, 4.19, 3.71, 4.10, 3.62],
//    dates
    ['28.04.2016', '28.05.2016', '28.06.2016', '28.07.2016', '28.08.2016', '28.09.2016',
        '28.10.2016', '28.11.2016', '28.12.2016', '28.01.2017', '28.02.2017', '28.03.2017',
        '11.04.2017']
];
//loadRisksInDb($risks, $DB_config);

//loadInfoInDb($performances, $DB_config);
//echo($inputIndex . '<br>');
function _carry($cases, $index)
{
    return array(
        'cases' => $cases,
        'index' => $index
    );
}

function getIndex($inputIndex, $arrays)
{
    foreach ($arrays as $array) {
        if (in_array($inputIndex, $array["cases"])) {
            return $array["index"];
        }
    }
    return 0;
}

function getComputeIndex($input)
{
    return [$input[0] * $input[1] / 100 + $input[1], $input[0] * $input[2] / 100 + $input[2], $input[3], $input[4], $input[5], $input[6], $input[7], $input[8], $input[9], $input[10]];
}

function getPerformance($index, $DB)
{
    $performances = getPerformanceDataFromSQL($DB);
    $computedPerformance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    foreach ($index as $key => $current_index) {
        if (!$current_index)
            continue;
        //do job
        foreach ($performances[$key] as $performanceIndex => $performance) {
            $computedPerformance[$performanceIndex] += $performance * $current_index / 100;
        }
    }
    return $computedPerformance;
}

function getRisk($index, $DB /*, $risks*/)
{
    $risks = getRiskDataFromSQL($DB);
    $computedRisks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    foreach ($index as $key => $current_index) {
        if (!$current_index)
            continue;
        //do job
        foreach ($risks[$key] as $riskIndex => $risk) {
            $computedRisks[$riskIndex] += $risk * $current_index / 100;
        }
    }
    return $computedRisks;
}

function getFondsIndex($index)
{
    return [
        $index[0],
        $index[1],
        $index[2],
        $index[8] + $index[4] + $index[5] + $index[6] + $index[7],
        $index[3],
        $index[9],
        $index[10]
    ];
}

function getAccumulatedPerformance($performances)
{
    foreach ($performances as $key => $performance) {
        if ($key > 0) {
            $performances[$key] += $performances[$key - 1];
        }
    }
    return $performances;
}

$arrays = [
    _carry([111, 112, 113, 114, 115, 116], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),// Leo A
    _carry([121, 131, 122, 132, 123, 133, 124, 134, 125, 135, 126, 136], [0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0]),// Leo A
    _carry([141, 142, 143, 144, 145, 146], [30, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0]), // Leo A + LEV 30%
    _carry([151, 152, 153, 154, 155, 156], [50, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0]), // Leo A + LEV 50%
    _carry([214, 215, 216], [0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0]), // midgrade EUR 10
    _carry([311, 312, 313, 314, 315, 316, 411, 412, 413, 414, 415, 416, 511, 512, 513, 514, 515, 516, 611, 612, 613, 614, 615, 616], [0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0]), // midgrade EUR 20
    _carry([211, 212, 213], [0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0]), // allgrade all cur 10
    _carry([251, 252], [50, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0]), // allgrade all curr 10 + Leo A 50% + Lev 50
    _carry([241], [30, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0]), // allgrade all curr 10 + Leo A 50% + Lev 30
    _carry([242], [35, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0]), // allgrade all curr 10 + Leo A 50% + Lev 35
    _carry([341], [30, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0]), // allgrade all curr 20 + Leo A 50% + Lev 30
    _carry([351], [50, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0]), // allgrade all curr 20 + Leo A 50% + Lev 50
    _carry([342], [35, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0]), // allgrade all curr 20 + Leo A 50% + Lev 35
    _carry([441, 451, 541, 641], [30, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0]), // allgrade all curr 30 + Leo A 50% + Lev 30
    _carry([551, 651], [50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0]), // allgrade all curr 30 + Leo A 50% + Lev 50
    _carry([442, 542, 642], [35, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0]), // allgrade all curr 30 + Leo A 50% + Lev 35
    _carry([253, 353, 453, 553], [50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0]), // Aktien 50% + Leo A 50% + LEV 50%
    _carry([234, 334, 434, 534], [0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50]), // Leo A 50% + ETF 50%
    _carry([653], [50, 50, 0, 0, 0, 0, 0, 0, 0, 30, 20]), // Aktien 30% + Leo A 50% + ETF 20%+ LEV 50%
    _carry([634], [0, 50, 0, 0, 0, 0, 0, 0, 0, 30, 20]), // Leo A 50% + ETF 20% +Aktien 30%
    _carry([232], [0, 40, 0, 0, 0, 0, 60, 0, 0, 0, 0]), // allgrade all cur 10 + Leo A 40%
    _carry([332], [0, 40, 0, 0, 0, 0, 0, 60, 0, 0, 0]), // allgrade all cur 20 + Leo A 40%
    _carry([432, 532, 632], [0, 40, 0, 0, 0, 0, 0, 0, 60, 0, 0]), // allgrade all cur 30 + Leo A 40%
    _carry([244, 344, 444, 544, 644], [0, 40, 0, 0, 0, 0, 0, 0, 0, 60, 0]), // Aktien 60% + Leo A 40%
    _carry([254, 354, 454, 554], [50, 40, 0, 0, 0, 0, 0, 0, 0, 60, 0]), // Aktien 60% + Leo A 40% + LEV 50%
    _carry([263], [0, 40, 0, 10, 0, 0, 50, 0, 0, 0, 0]), // allgrade all curr 10 + Leo A 40% +10% alternatives
    _carry([363], [0, 40, 0, 10, 0, 0, 0, 50, 0, 0, 0]), // allgrade all curr 20 + Leo A 40% +10% alternatives
    _carry([463, 563, 663], [0, 40, 0, 10, 0, 0, 0, 0, 50, 0, 0]), // allgrade all curr 30 + Leo A 40% +10% alternatives
    _carry([664, 665], [0, 40, 0, 10, 0, 0, 0, 0, 0, 30, 20]), // Aktien 30% + Leo A 40% + ETF 20% + 10% alternatives
    _carry([654], [50, 40, 0, 0, 0, 0, 0, 0, 0, 30, 30]), // Aktien 30% + Leo A 40% + ETF 30%+ LEV 50%
    _carry([462, 562, 662], [0, 35, 0, 10, 0, 0, 0, 0, 55, 0, 0]), // allgrade all curr 30 + Leo A 35% +10% alternatives
    _carry([262], [0, 35, 0, 10, 0, 0, 55, 0, 0, 0, 0]), // allgrade all curr 10 + Leo A 35% +10% alternatives
    _carry([362], [0, 35, 0, 10, 0, 0, 0, 55, 0, 0, 0]), // allgrade all curr 20 + Leo A 35% +10% alternatives
    _carry([261], [0, 30, 0, 10, 0, 0, 60, 0, 0, 0, 0]), // allgrade all curr 10 + Leo A 30% +10% alternatives
    _carry([361], [0, 30, 0, 10, 0, 0, 0, 60, 0, 0, 0]), // allgrade all curr 20 + Leo A 30% +10% alternatives
    _carry([461, 561, 661], [0, 30, 0, 10, 0, 0, 0, 0, 60, 0, 0]), // allgrade all curr 30 + Leo A 30% +10% alternatives
    _carry([464, 564], [0, 30, 0, 10, 0, 0, 0, 0, 0, 60, 0]), // Aktien 60% + Leo A 30% + 10% alternatives
    _carry([666], [0, 30, 0, 10, 0, 0, 0, 0, 0, 40, 20]), // Aktien 40% + Leo A 30% +ETF 20% + 10% alternatives
    _carry([421, 521, 621], [0, 30, 0, 0, 0, 70, 0, 0, 0, 0, 0]), // midgrade EUR 20 + Leo A 30%
    _carry([231], [0, 30, 0, 0, 0, 0, 70, 0, 0, 0, 0]), // allgrade all cur 10 + Leo A 30%
    _carry([331], [0, 30, 0, 0, 0, 0, 0, 70, 0, 0, 0]), // allgrade all cur 20 + Leo A 30%
    _carry([431, 531, 631], [0, 30, 0, 0, 0, 0, 0, 0, 70, 0, 0]), // allgrade all cur 30 + Leo A 30%
    _carry([255, 355, 455, 555], [50, 30, 0, 0, 0, 0, 0, 0, 0, 70, 0]), // Aktien 70% + Leo A 30% + LEV 50%
    _carry([245, 345, 445, 545, 645], [0, 30, 0, 0, 0, 0, 0, 0, 0, 70, 0]), // Aktien 70% + Leo A 30%
    _carry([655], [50, 30, 0, 0, 0, 0, 0, 0, 0, 30, 40]), // Aktien 30% + Leo A 30% + ETF 40%+ LEV 50%
    _carry([264], [50, 10, 0, 10, 0, 0, 0, 0, 0, 80, 0]), // Aktien 70% + Leo A 20% + 10% alternatives
    _carry([222], [0, 25, 0, 0, 0, 0, 75, 0, 0, 0, 0]), // midgrade EUR 10 + Leo A 25%
    _carry([322, 422, 522, 622], [0, 25, 0, 0, 0, 75, 0, 0, 0, 0, 0]), // midgrade EUR 20 + Leo A 25%
    _carry([221], [0, 20, 0, 0, 0, 0, 80, 0, 0, 0, 0]), // midgrade EUR 10 + Leo A 20%
    _carry([321], [0, 20, 0, 0, 0, 80, 0, 0, 0, 0, 0]), // midgrade EUR 20 + Leo A 20%
    _carry([364], [0, 20, 0, 10, 0, 0, 0, 0, 0, 70, 0]), // Aktien 70% + Leo A 20% + 10% alternatives
    _carry([161, 162, 163, 164, 165, 166], [0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0]), // 50% alternatives + Leo T
    _carry([233], [0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0]), // allgrade all cur 10 + Leo T 50%
    _carry([243], [40, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0]), // allgrade all cur 10 + Leo T 50% + Lev 40
    _carry([352], [50, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0]), // allgrade all curr 20 + Leo T 50% + Lev 50
    _carry([343], [40, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0]), // allgrade all curr 20 + Leo T 50% + Lev 40
    _carry([333], [0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0]), // allgrade all curr 20 + Leo T 50%
    _carry([433, 533, 633], [0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0]), // allgrade all cur 30 + Leo T 50%
    _carry([443, 543, 643], [40, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0]), // allgrade all cur 30 + Leo T 50% + Lev 40
    _carry([452, 552, 652], [50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0]), // allgrade all cur 30 + Leo T 50% + Lev 50
    _carry([235, 335, 435, 535], [50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50]), // Leo T 50% + ETF 50%
    _carry([226], [0, 0, 45, 0, 55, 0, 0, 0, 0, 0, 0]), // midgrade EUR 10 + Leo T 45%
    _carry([326, 426, 526, 626], [0, 0, 45, 0, 0, 55, 0, 0, 0, 0, 0]), // midgrade EUR 20 + Leo T 45%
    _carry([225], [0, 0, 40, 0, 60, 0, 0, 0, 0, 0, 0]), // midgrade EUR 10 + Leo T 40%
    _carry([325, 425, 525, 625], [0, 0, 40, 0, 0, 60, 0, 0, 0, 0, 0]), // midgrade EUR 20 + Leo T 40%
    _carry([635], [0, 0, 40, 0, 0, 0, 0, 0, 0, 30, 30]), // Leo T 40% + ETF 30% + Aktien 30%
    _carry([224], [0, 0, 35, 0, 65, 0, 0, 0, 0, 0, 0]), // midgrade EUR 10 + Leo T 35%
    _carry([324, 424, 524, 624], [0, 0, 35, 0, 0, 65, 0, 0, 0, 0, 0]), // midgrade EUR 20 + Leo T 35%
    _carry([465, 466, 565, 566], [0, 0, 30, 10, 0, 0, 0, 0, 0, 60, 0]), // Aktien 60% + Leo T 30% + 10% alternatives
    _carry([323, 423, 523, 623], [0, 0, 30, 0, 0, 70, 0, 0, 0, 0, 0]), // midgrade EUR 20 + Leo T 30%
    _carry([223], [0, 0, 30, 0, 0, 0, 70, 0, 0, 0, 0]), // midgrade EUR 10 + Leo T 30%
    _carry([246, 346, 446, 546, 646], [0, 0, 30, 0, 0, 0, 0, 0, 0, 70, 0]), // Aktien 70% + Leo T 30%
    _carry([256, 356, 456, 556], [50, 0, 30, 0, 0, 0, 0, 0, 0, 70, 0]), // Aktien 70% + Leo T 30% + LEV 50%
    _carry([656], [50, 0, 30, 0, 0, 0, 0, 0, 0, 40, 30]), // Aktien 40% + Leo T 30% + ETF 30% + LEV 50%
    _carry([636], [0, 0, 30, 0, 0, 0, 0, 0, 0, 30, 40]), // Leo T 30% + ETF 40% +Aktien 30%
    _carry([236, 336, 436, 536], [0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 70]), // Leo T 30% + ETF 70%
    _carry([265, 266, 365, 366], [0, 0, 20, 10, 0, 0, 0, 0, 0, 70, 0]), // Aktien 70% + Leo T 20% + 10% alternatives
];
$simpleIndex = getIndex($inputIndex, $arrays);

$computedIndex = getComputeIndex($simpleIndex);
$performanceChartData = getPerformance($computedIndex, $DB_config);
$riskChartData = getRisk($computedIndex, $DB_config);
$averageData = [
    array_sum($performanceChartData) / 12,
    array_sum($riskChartData) / sizeof($riskChartData),
    max($riskChartData),
];
$performanceChartData = getAccumulatedPerformance($performanceChartData);
$allData = [
    'risks' => $riskChartData,
    'performance' => $performanceChartData,
    'index' => getFondsIndex($simpleIndex),
    'average' => $averageData
];
echo(json_encode($allData));
exit;