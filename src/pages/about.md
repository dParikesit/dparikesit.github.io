---
layout: ../layouts/AboutLayout.astro
title: "About"
---

<div>
  <img src="/assets/profpic.webp" class="sm:w-1/2 mx-auto" alt="Dimas Shidqi Parikesit">
</div>

Hi, I'm Dimas Parikesit, a Computer Science PhD candidate at LiftLab, University of Virginia, advised by [Prof. Chang Lou](https://changlousys.github.io/).

My research focuses on **verifying correctness of distributed systems using LLM and formal methods**. I believe formal methods is the key to more reliable programs, and LLM will make it accessible to wide range of programs. You can find my [selected publications on the homepage](/#publication).

## Education

### University of Virginia

**PhD in Computer Science (in progress)** · Aug. 2024–Present

Advisor: Prof. Chang Lou

### Bandung Institute of Technology, Indonesia

**BSc in Informatics** · Aug. 2020–Aug. 2024

GPA: 3.80/4.00

## Research Experience

### Software Correctness

**Research Assistant · LiftLab, University of Virginia** · Ongoing research

- Investigate how LLMs can carry useful semantic information from original systems into reimplementations with entirely different designs or architectures.
- Reviewed 12 software-reimplementation cases, including the SGLang router, Bun, and Vinext.

### Distributed-System Reliability (LISA)

**Research Assistant · LiftLab, University of Virginia** · Aug. 2024–Present

- Lead system design and implementation of LISA, using LLMs to turn historical bug reports into low-level invariants that prevent regression failures.
- Identified 34 new bugs across ZooKeeper, HDFS, HBase, and Solr; 16 were confirmed by developers. Examples include missing block locations in HDFS and expired snapshots accepted by HBase.
- Modified the JVM engine and built the full multi-stage pipeline to check inferred invariants using static analysis, concolic execution, and Z3.
- Lead and mentor five research interns, delegating case collection and evaluation and guiding research practices.

### Runtime Failure Detection (T2C)

**Undergraduate Researcher · OrderLab, University of Michigan**

Collaboration with Microsoft Research · Nov. 2022–Dec. 2023

- Conducted the full evaluation of T2C, which derives runtime semantic checkers from tests, across ZooKeeper, Cassandra, HDFS, and HBase. T2C detected 15 of 20 reproduced real-world silent failures.
- Implemented a trie-based representation of assertion operation sequences, sharing common prefixes rather than storing separate operation lists to reduce initial runtime overhead by more than 50%.

### Inference Caching (EVProx)

**Undergraduate Researcher · UCare, University of Chicago** · Apr. 2022–Jun. 2022

- Built EVProx cache-key computation to generate approximate values for an L3 cache layer, reducing 99th-percentile tail latency of Facebook's Deep Learning Recommendation Model (DLRM) by 22%.
- Ran experiments on an NVIDIA A6000 GPU.

## Industry Experience

### Capital Dynamics, Sdn. Bhd.

**Software Engineer Intern** · May 2022–Jul. 2022

- Rebuilt six company websites using modular frontend components and a shared CMS.

## Technical Skills

- **Languages:** Java, Python, Rust, C++, Bash.
- **Systems:** Linux, JVM, ZooKeeper, Hadoop/HDFS, HBase, Cassandra, Solr.
- **Methods:** Formal methods, SMT solving (Z3), static analysis, concolic execution, runtime checking.
- **AI:** PyTorch, vLLM, SGLang, NVIDIA Dynamo, Ray.

## Honors, Awards & Research Support

- **2025:** Microsoft Accelerating Foundation Models Research Initiative — US$15,000 in Azure API credits.
- **2024:** SOSP Student Travel Grant.
- **2021:** First Place, Datathon AI, Indonesia.
- **2016:** Gold Medal, National Science Olympiad, Indonesia.

## Outside Research

I enjoy systems programming, ML/AI projects, backend web development, and working on my homelab. I also like discussing ideas with my peers and junior students. You can explore my projects on [GitHub](https://github.com/dParikesit).

## Connect with Me

Feel free to email me at [vqx2dc@virginia.edu](mailto:vqx2dc@virginia.edu) or connect with me on [LinkedIn](https://www.linkedin.com/in/dimas-parikesit/).

If you want to learn more about doing research, I'm more than happy to share how I got into it and how you can do it too! Just email me and we can talk about it.

## Website Usage

This website is used to announce my life milestones, publish my personal/technical blogs, paper reading notes, and other things.

Do note that everything in this website is my personal opinion that doesn't represent anyone else other than myself.

## Attributions

This website is created using [astro-paper](https://github.com/satnaing/astro-paper) template based on Astro v4.
