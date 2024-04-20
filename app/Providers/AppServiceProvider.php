<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\CastService;
use App\Repositories\CastRepository;
use App\Services\MovieService;
use App\Repositories\MovieRepository;
use App\Services\ImageService;
use App\Repositories\ImageRepository;
class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        // $this->app->bind(AdminService::class, function ($app) {
        //     return new AdminService($app->make(AdminRepository::class));
        // });

        // Binding CastService and CastRepository
        $this->app->bind(CastService::class, function ($app) {
            return new CastService($app->make(CastRepository::class));
        });

        // Binding MovieService and MovieRepository
        $this->app->bind(MovieService::class, function ($app) {
            return new MovieService($app->make(MovieRepository::class));
        });

        // Binding ImageService and ImageRepository
        $this->app->bind(ImageService::class, function ($app) {
            return new ImageService($app->make(ImageRepository::class));
        });

        // You may also bind AdminRepository if necessary
        // $this->app->bind(AdminRepository::class, function ($app) {
        //     return new AdminRepository();
        // });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        //
    }
}
