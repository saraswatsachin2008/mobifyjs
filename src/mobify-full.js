require(["capture", "resizeImages", "dnsPrefetch", "keepWarm", "speedClick"], function(Capture, ResizeImages, DnsPrefetch, KeepWarm, SpeedClick) {
    var Mobify = window.Mobify = window.Mobify || {};
    Mobify.Capture = Capture;
    Mobify.ResizeImages = ResizeImages;
    Mobify.DnsPrefetch = DnsPrefetch;
    Mobify.KeepWarm = KeepWarm;
    Mobify.SpeedClick = SpeedClick;

    //Mobify.Enhance = Enhance;
    Mobify.api = 2.0
    return Mobify

}, undefined, true);
// relPath, forceSync