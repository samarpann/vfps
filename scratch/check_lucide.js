import * as lucide from 'lucide-react';
const keys = Object.keys(lucide);
const toCheck = ['Menu', 'Phone', 'Download', 'Mail', 'MapPin', 'Globe', 'Share2', 'MessageSquare', 'ExternalLink', 'ChevronLeft', 'Send', 'MessageCircle', 'Users2', 'Cpu'];
toCheck.forEach(c => {
    console.log(c + ':', !!lucide[c]);
});
