# Spacial Effects

## Overview

This package now contains two plugins:
- XTC: a reaper plugin that attempts to cancel crosstalk.
- frequency shifter:  provides phase shifting effects, but can, when combined with xtc.jsfx, enhance spacial sound, almost like your in a bubble surrounded by sound.

The term crosstalk as used here means the signal arriving at the opposit ear when listening to a stereo source through a pair of speakers. When listening through headphones, each ear only hears the signal it is supposed to hear; this is why binaural (3d) audio works well via headphones. When listening via speakers, your right ear hears sound from the right speaker, but also delayed and attenuated sound from the left speaker, and vice versa.  This crosstalk degrades the 3d image.

## Setting up xtc.jsfx

1. With reaper closed, go to your reaper jsfx directory ( usually something like homeFolder\appData\Roaming\reaper\effects ).
2. Copy the entire xtc folder from this .zip file to the effects folder.
It should contain this file, xtc.jsfx, and a subfolder which contains library files which do all the real work. The library is part of the ambiosonic toolkit. You can read about it here:
https://www.ambisonictoolkit.net/documentation/reaper/
3. open reaper and add a source track with stereo program material on it. The material should have good stereo separation; mono material, or material that doesn't have much separation to begin with probably won't work so well.

From this point, you can choose to run the plugin as an insert effect, or via send.

* send
1. Add another  track called "xtc" and route the first track to it via a send.
2. Now go to the effects browser for track xtc and type xtc into the filter. You should find an entry which says something like "Stereo multitap delay with Feedback and xtc mode". Press enter on this and wait a few seconds for the plugin to load. To run via a track send, be sure the wet / dry mix is set to 1.0 (maximum, this is default).
3. Exit out of the effects browser and solo the xtc track. Play the file and be sure your at least getting signal from the plugin; it'll probably sound weird...
4. If your getting signal from the plugin, unsolo the xtc track and you should have both tracks playing.
5. To best hear the effect, sit midway between the speakers and about 3 feet away from each one. This is a typical setup for nearfield monitors which I suspect many people are using for mixing, etc.  Compare what you hear when the xtc track is muted (should be just the original program material), and when the xtc track is unmuted (might be some gain reduction and might change tonal balance, but you should hear the image get wider and more defined).

If the effect is too pronounced (i.e. things sound thin, too much reverb, no low end), then turn down the track volume on the effect track.  In my tests, seems to sound best when effect track is about 3db quieter than the source, but this will vary with source material and taste.


### running via track insert

You can insert it on the master bus, or on the source track. One nice thing about using the master bus is that you can put other effects on the source track and they will all be processed by xtc. For instance, once you get xtc going, you might want to try a chorus with very short delays, frequency shifter (valhalla frequency shifter works well, again with small delay and frequency between 0.2 and 0.7 hz, or see below for my version of a frequency shifter.

When inserting via track insert, use the wet / dry mix and set it somewhere between 0.2 and 0.5, depending on the material and how pronounced you want the effect.

I tried to build in some gain compensation, since the effect does cancel some frequencies.

### Things to play with

The way this works is that the plugin takes signal from each channel and feeds it into the opposit channel, delayed by a small amount. The default is 0.06 milliseconds, which is aprox. 6 samples.  It also inverts the phase of the signal (multiplies each sample by -1). Each tap is fed back to the opposit channel and inverted again. The idea is that the delayed and inverted signal will cancel out what the opposit ear hears. However, you then need to cancel that signal as well, thus the need for multiple taps.

The parameters you can adjust are:
- delay time (default 0.06 ms).
- number of taps (default 100).
- set decay, which effects how much each tap's gain is reduced  each round (default is 1.75). Note that this is the base for an exponential - decay^tap so on the first repeat gain is 1 / decay, on second repeat gain is 1 / decay^2 (decay squared), etc.
- turn xtc mode on / off (when off, inverting and channel swapping doesn't happen).
- enable / disable a highpass filter inserted before the delay (by default it's on with cutoff set to 100 hz). 
- set feedback gain (default is 0).
- set wet / dry mix (as insert set this to between 0.2 and 0.5, if running via send then set this to maximum 1.0).
- set delay time interpolation, which interpolates between samples if delay time isn't exactly a multiple of sample time (default is cubic interpolation which works well).

## Frequency Shifter

This is similar to typical frequency shifter plugins like Valhalla's freqEcho, but with a few different modes and the ability to be set to a static mode (see below).

### Parameters

- frequency: set to around 0.1 for nice phasing effect, set to 0 to enable static mode (default 0.3 hz).
- mix (default 0.3 - setup as insert effect; try on master bus).
- phase1 (default 0.7).
- phase2 (default 0.45; only active when frequency set to 0).
- min frequency (default 100 hz).
- max frequency (default 8000 hz).
- band spacing: lower numbers increase number of bands between min and max (default 1.45).
- band count (set automatically when min, max, and spacing are adjusted; when defaults are used, this should be 11).
- mode (default is 2; nice surround effect when frequency set to 0 and the xtc plugin is used either on master or following it on a track).
- solo: audition each filter band separately (default is 0 - off).

 
Comments to rwp list, or to me at RichCaloggero@gMail.com

