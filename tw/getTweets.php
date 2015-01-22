<?php
require_once 'twitteroauth.php';

define('CONSUMER_KEY', '9inwS61Fr3ZZlEBKL9OHXyHmp');
define('CONSUMER_SECRET', 'RvOwiFVmoB8aKw5A5QUJBwkAxKQA4mgUkGfGvaqaMGMfunXJuL');
define('ACCESS_TOKEN', '227739179-Qac3mDqsr9KhaijRc6gRbRLfErTm0Ghky1Ike1LS');
define('ACCESS_TOKEN_SECRET', 'mZ9mpi8Pyeq1t8JPGH79NBIjM7LL1Xq0jIdDdIj4jDq8N');

$toa = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

$query = array(
    "q" => "#bepartofit",
    "count" => "10"
);

$results = $toa->get('search/tweets', $query);


foreach ($results->statuses as $result) {

    $date = new DateTime($result->created_at);
    $date->setTimezone(new DateTimeZone('Europe/Helsinki'));
    $formatted_date = $date->format('U');

    $arr[] = array('username' => $result->user->screen_name,
        'img' => $result->user->profile_image_url,
        'text' => $result->text,
        'time' => $formatted_date
    );
}

echo json_encode($arr);

/*$fp = fopen('data.json', 'w');
fwrite($fp, json_encode($arr));
fclose($fp);*/

?>