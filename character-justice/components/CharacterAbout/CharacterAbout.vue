<template>
    <div
        class="CharacterAbout"
        ref="CharacterAbout"
        :style="{ minHeight: `${sectionHeight}px` }"
    >
        <div class="CharacterAbout__container_small CharacterAbout__container">
            <CharacterCardSmall
                v-for="character in characterList"
                :key="character.id"
                :character="character"
            />
        </div>

        <div class="CharacterAbout__container_big CharacterAbout__container">
            <CharacterCard
                v-for="character in characterList"
                :key="character.id"
                :character="character"
            />
        </div>

        <div class="CharacterAbout__fixScreenMask" />
    </div>
</template>

<script>
import characterList from '~/mixins/characterList'
import CharacterCard from '~/components/CharacterAbout/CharacterCard'
import CharacterCardSmall from '~/components/CharacterAbout/CharacterCardSmall'

import scrollama from 'scrollama'
import 'intersection-observer'

export default {
    mixins: [characterList],
    components: {
        CharacterCard,
        CharacterCardSmall,
    },
    data() {
        return {
            sectionHeight: 500,
        }
    },
    methods: {},
    mounted() {
        // -----------------------maintain height----------------------------
        // get card container's height, then update ContainerAbout's height
        const containerSmallDOM = document.querySelector(
            '.CharacterAbout__container_small'
        )
        setTimeout(() => {
            this.sectionHeight = containerSmallDOM.clientHeight
        }, 2000)

        // // -----------------------Zoom cards----------------------------
        const scrollerZoomCard = scrollama()
        const cards = document.querySelectorAll('.Card')
        scrollerZoomCard
            .setup({
                step: '.CharacterAbout',
                offset: 0.9,
            })
            .onStepEnter((response) => {
                cards.forEach((card, index) => {
                    setTimeout(
                        () => {
                            card.classList.add('normal')
                        },
                        index < 4 ? 200 * index : 200 * (index - 4)
                    )
                })
            })
            .onStepExit((response) => {
                // if (response.direction === 'down') return
                // cards.forEach((card) => {
                //     card.classList.remove('normal')
                // })
            })

        window.addEventListener('resize', scrollerZoomCard.resize)
    },
}
</script>

<style lang="scss">
.CharacterAbout {
    z-index: 1;
    width: 100%;
    min-height: 560px;
    background: black;
    &__container_small {
        z-index: 1;
        position: relative;
        width: 100%;
        // height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__container_big {
        display: none;
        z-index: 1;
        position: relative;
        width: 100%;
        height: 100vh;
        flex-direction: row;
        justify-content: flex-start;
    }
    &__fixScreenMask {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    @include atMedium {
        height: 100vh;

        &__container_small {
            display: none;
        }

        &__container_big {
            display: flex;
            flex-direction: row;
        }
    }
}

@keyframes anim1 {
    from {
        transform: translateY(-50%) scale(0.05);
        opacity: 0;
    }
    to {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

.fixScreen {
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>
