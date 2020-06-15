# TrimVid

This project is not intended to be *good* or even valuable to most people. I just wanted a command line tool to quickly trim videos with FFmpeg and I kept forgetting what the optimal video trimming arguments were, so this tool helps me remember.

## Prerequisites

* [FFmpeg](https://ffmpeg.org/)

## Installation

This project is not high quality so I do not intend to publish this on NPM public.

```bash
npm install -g https://github.com/AFRUITPIE/TrimVid.git
```

## Usage

```bash
trimvid --input <INPUT VIDEO> --start <START TIME> --end <END TIME> --output <OUTPUT VIDEO>
```
Times are in HH:MM:SS format