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

Prediction:
$$\begin{align}
\hat{x}_{t|t-1}
    &= A\hat{x}_{t-1|t-1} + B u_t, \\
P_{t|t-1}
    &= A P_{t-1|t-1} A^\top + Q.
\end{align}
$$


Kalman Gain: 
$$
\begin{equation}
K_t
=
P_{t|t-1} H^\top
\left(
H P_{t|t-1} H^\top + R
\right)^{-1}.
\end{equation}
$$

Update step:
$$
\begin{align}
\hat{x}_{t|t}
    &= \hat{x}_{t|t-1}
    + K_t
    \left(
    z_t - H\hat{x}_{t|t-1}
    \right), \\
P_{t|t}
    &= (I-K_tH)P_{t|t-1}.
\end{align}
$$

Vanilla RNN:
$$
\begin{align}
h_t
    &= \phi\!\left(
    W_h h_{t-1}
    +
    W_x x_t
    +
    b
    \right), \\
y_t
    &= W_o h_t + b_o.
\end{align}
$$