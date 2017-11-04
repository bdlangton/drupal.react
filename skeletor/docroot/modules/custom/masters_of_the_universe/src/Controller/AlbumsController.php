<?php

namespace Drupal\masters_of_the_universe\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class AlbumsController.
 */
class AlbumsController extends ControllerBase {

  /**
   * App.
   *
   * @return string
   *   Return Hello string.
   */
  public function app() {
    return [
      '#type' => 'markup',
      '#markup' => '<div id="app"></div>',
      '#attached' => [
        'library' => [
          'masters_of_the_universe/masters_of_the_universe',
        ],
      ],
    ];
  }

}
