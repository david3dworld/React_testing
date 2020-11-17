import moment from 'moment-timezone'

const self = {

    validateEmail: (value) => {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(value);
    },

    validatePhoneNumber: (value) => {

        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        return re.test(value);
    },

    convertRegularPhoneNumber: (value) => {

        const onlyNumber = self.filterNumber(value);

        return `(${onlyNumber.slice(0, 3)})-${onlyNumber.slice(3, 6)}-${onlyNumber.slice(6, onlyNumber.length)}`
    },

    isNumber: (string) => {

        return !isNaN(parseFloat(string)) && isFinite(string);
    },
    
    filterNumber: (string) => {

        try {

            let number = '';

            for (let i = 0; i < string.length; i++) {

                if (self.isNumber(string[i])) {

                    number += string[i]

                }

            }

            return number;

        } catch (e) {

            return 0;
        }

    },

    toCapFLetter: (value) => {

        if (!value || value.length === 0) return value;

        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    },

    extractPostContentData: (text, tags) => {

        let brBlocks = text.split('\n');

        let blocks = []
        for (let k = 0; k < brBlocks.length; k ++) {

            blocks.push(brBlocks[k]);

            if (k < brBlocks.length - 1) {

                blocks.push('<br>')
            }
            
        }
        
        for (const tag of tags){

            let tempblocks = []

            for (const block of blocks){

                let tagBlocks = []

                if (block.includes(tag)) {

                    const subBlocks = block.split(tag);

                    for (let i = 0; i < subBlocks.length; i++) {

                        tagBlocks.push(subBlocks[i]);

                        if (i < subBlocks.length -1) {

                            tagBlocks.push(tag)
                        }
                    }

                    tempblocks = tempblocks.concat(tagBlocks.filter(b => b !== ''))

                }else{

                    tempblocks.push(block)
                }

            }

            blocks = tempblocks;
        }

        return blocks.map(block => {

            if (block.includes('#')) {

                return {
                    type: 'link',
                    text: block
                }
            }else if (block.includes('<br>')){

                return {
                    type: 'br',
                    text: block
                }
            } else {

                return {
                    type: 'text',
                    text: block
                }
            }

        })

    },

    getPostedTime: (time) => {

        const duration = moment.duration(moment().diff(moment(time, 'YYYY-MM-DD HH:mm:ss')));

        if (Math.floor(duration.asDays()) > 0) {

            return `Posted ${Math.floor(duration.asDays())} day(s) ago`
        }
        if (Math.floor(duration.asHours()) > 0) {

            return `Posted ${Math.floor(duration.asHours())} hour(s) ago`
        }
        if (Math.floor(duration.asMinutes()) > 0) {

            return `Posted ${Math.floor(duration.asMinutes())} minutes(s) ago`
        }
        if (Math.floor(duration.asSeconds()) > 0) {

            return `Posted ${Math.floor(duration.asSeconds())} second(s) ago`
        }
    },

    getTokenCountOfPost: (setting, hashTagCount, mediaCount) => {

        return setting.tokenPerPost + hashTagCount * setting.tokenPerHashTag + mediaCount * setting.tokenPerPhoto;
    },

    getThumbnailImageUrl: (media) => {

        return `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/image/upload/c_scale,w_0.25/c_crop,g_auto,h_160,w_160/dpr_2.0,f_auto/v${media.version}/${media.public_id}`
    },

    getLargeImageUrl: (media) => {

        return `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/image/upload/w_255,ar_1,c_fill,g_auto:classic/f_auto,q_auto/v${media.version}/${media.public_id}`
    },

    getMediaPublicId: (media) => {

        return `${media.public_id}.${media.format}`
    }


}





export default self;