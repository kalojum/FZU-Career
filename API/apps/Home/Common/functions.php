<?php
/**
 * functions.php
 * Created by PhpStorm.
 * Author: xiaoyu
 * Time: 8/4/16 15:34
 */

    /**
     * 获取全局唯一ID
     * @return string
     */
    function create_uuid() {
        if (function_exists('com_create_guid')){
            return com_create_guid();
        } else {
            mt_srand((double)microtime()*10000);
            $charid = strtolower(md5(uniqid(rand(), true)));
            $hyphen = chr(45);
            $uuid = substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12);
            return $uuid;
        }
    }

    /**
     * 获取随机字符串
     * @return string
     */
    function getRandChar() {
        $randChar = "";
        $str = "zxcvbnmasdfghjklqwertyuiop";
        for( $i = 1; $i <= 8; $i++ ) {
            $randChar .= $str[rand(0,strlen($str))];
        }
        return $randChar;
    }