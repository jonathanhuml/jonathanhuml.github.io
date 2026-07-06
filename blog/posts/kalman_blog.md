---
title: "The OG State-Space Model and its Lessons on Entropy (or Why Rudie Can't Fail)"
date: 2026-07-06
---

Before Mamba and before recurrent neural networks, there was the Kalman filter. 

The Kalman filter is over 60 years old, originally formulated in Rudolf Kalman's "A New Approach to Linear Filtering and Prediction Problems" (1960). 

Now, why study an algorithm that your grandma probably used? And why *was* grandma trying to model dynamical systems, anyway? Analogous to Ordinary Least Squares (OLS), the Kalman filter does exact inference in *linear* (state transitions are defined by a linear map between states at time $t$ and $t+1$), *Gaussian* (states are not deterministic, but random with noise sampled from a normal distribution) dynamical systems. 

That makes it one of the simplest possible dynamical system we can study, and therefore worth understanding deeply.


The algorithm does exact inference for the linear, first-order state-space equations:

$$
\begin{align}
x_t &= A x_{t-1} + \varepsilon_t,\qquad \varepsilon_t \sim \mathcal{N}(0, Q), \\
y_t &= C x_t + \eta_t,\qquad \eta_t \sim \mathcal{N}(0, R).
\end{align}
$$

![A hidden Markov model (HMM): the latent states $x_t$ form a Markov chain, and each state emits an observation $y_t$.](./blog/images/hmm.png)

Imagine some latent state $x_t$ evolving in time, while we only get noisy observations $y_t$. Under a Gaussian-noise model, that makes the Kalman filter the "ordinary least squares" of dynamical systems, which is to say, the absolute OG of all the models that have followed it. 

Lorem ipsum dolor sit amet, $\int_0^1 x^2\,dx = \frac{1}{3}$ and
$\nabla \cdot \mathbf{F} = 0$, consectetur adipiscing elit. Integer at ligula
vitae neque pretium porttitor. Suspendisse potenti. Praesent in lacus nec justo
lacinia faucibus, sed porttitor ipsum.

$$
\nabla^2 \phi =
\frac{\partial^2 \phi}{\partial x^2} +
\frac{\partial^2 \phi}{\partial y^2}
$$

## A Small Section

Donec vitae mauris a mi viverra suscipit. Curabitur faucibus, augue at
condimentum tempor, lectus sem posuere risus, vel facilisis justo nibh ac
erat. Morbi euismod sem sit amet augue interdum, sed dignissim leo blandit.

Aliquam erat volutpat. Nulla id ipsum sed erat suscipit blandit. Integer
rhoncus mi sit amet orci lacinia, nec posuere lacus gravida.
