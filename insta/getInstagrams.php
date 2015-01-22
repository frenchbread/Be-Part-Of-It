<?php
require_once 'instagram.class.php';
$instagram = new Instagram('ef2ef541c40141b1814ff252e07551cf');
$tag = 'bepartofit';
$media = $instagram->getTagMedia($tag);
$limit = 15;
$size = '200';

foreach(array_slice($media->data, 0, $limit) as $data)
{
    //echo '<p><img src="'.$data->images->thumbnail->url.'" height="'.$size.'" width="'.$size.'" alt="SOME TEXT HERE"></p>';

    $arr[] = array(
        'username' => $data->user->username,
        'img' => $data->user->profile_picture,
        'media' => $data->images->standard_resolution->url,
        'text' => $data->caption->text,
        'time' => $data->created_time,
        'likes' => $data->likes->count,
    );
}

echo json_encode($arr);

?>