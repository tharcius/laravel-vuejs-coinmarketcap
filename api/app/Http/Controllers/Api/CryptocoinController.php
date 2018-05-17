<?php

namespace App\Http\Controllers\Api;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CryptocoinController extends Controller
{
    /**
     * @var Client
     */
    private $client;
    private $paginate;
    private $currency;

    public function __construct(Client $client)
    {
        $this->client = $client;
        $this->paginate = 10;
        $this->currency = 'BRL';
    }

    public function index() {
        return $this->client->request('GET', "https://api.coinmarketcap.com/v2/ticker/?limit={$this->paginate}&convert={$this->currency}")->getBody()->getContents();
    }
}
