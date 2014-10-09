;; Rebuild in clojure from @kjellski
;; ALL CREDITS to the wonderful writeup of
;; Read the article here:
;; https://rsnous.com/posts/2014-08-07-pinhole-a-falling-ball-demo.html

(ns foresee.core
  (:require [foresee.drawing :as draw]))
(enable-console-print!)

;; -----------------------------------------------------------------------------
;; game-state
(def state {:level {}
            :balls []
            })

(def inital-level {:spawn [300 200]})

(defn ball-on-stage [[x y]]
  (let [shape (draw/set-position (draw/ball 30) x y)]
    (println x y)
    (draw/draw-on-stage shape)))

(defn game-loop []
  (let [position (map vec (partition 2 (interleave (range 0 1000 10) (range 0 1000 10))))]
    (dorun (map ball-on-stage position))))

(defn run-game []
  (game-loop))

(run-game)
