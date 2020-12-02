<template>
    <div>
        <Header/>
        <PageTitle title="Textos Legais"/>
        <Breadcrumb page="Textos Legais"/>
        <div class="container tabs">
            <TabNav :tabs="[
                    'Termos de uso',
                    'Política de privacidade',
                    'Uso de cookies'
                ]"
                :selected="selected" @selected="setSelected" :stores=false>
                <Tab :isSelected="selected === 'Termos de uso'">
                    <div class="text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, felis nec faucibus euismod, est erat tincidunt odio,
                            quis viverra eros tortor ut diam. Proin fringilla suscipit tellus. Proin nisl purus, ultrices convallis lorem ut, ornare vehicula dui. 
                            Proin convallis nibh vel leo semper accumsan sed vitae ante. Nam magna diam, maximus in purus et, tristique dignissim sapien. 
                            Sed eget ultricies sem. Quisque ex massa, euismod a consectetur sit amet, congue et felis. Aenean ut magna est.
                            Nam iaculis ipsum viverra velit lobortis volutpat. Proin dapibus augue eu sem bibendum, nec vestibulum mi ullamcorper. Sed massa dui, 
                            facilisis a consequat non, feugiat in dui. Fusce rutrum felis nisl, nec tincidunt nunc facilisis quis. Aliquam nec ex non felis cursus 
                            egestas quis placerat tortor. Sed eleifend consequat risus eget posuere. Nam vel mauris luctus, consectetur odio efficitur, blandit risus. 
                            Donec ut orci consectetur, ullamcorper magna pellentesque, tincidunt arcu. Nulla nunc nisl, egestas nec rhoncus eget, sollicitudin ac 
                            massa. Nullam at sodales quam. Duis odio lacus, laoreet ac nulla vitae, feugiat facilisis augue. Pellentesque fermentum aliquet lacus, 
                            quis vehicula nibh efficitur sed. Fusce cursus accumsan lorem at finibus. Vestibulum id lorem non nisi pellentesque mollis.
                            In ultrices elit ut auctor pellentesque. Curabitur eu fringilla lorem. Morbi auctor vel felis quis consequat. Vivamus non nisi eu nulla 
                            scelerisque dictum. Nullam auctor viverra enim eu pharetra. Quisque in ex ut mauris rutrum scelerisque eu in dui. Aenean aliquet finibus 
                            egestas. Etiam in tempus tortor.
                            Suspendisse sodales nibh a pretium iaculis. Quisque aliquet, purus at ullamcorper posuere, elit odio ullamcorper ipsum, vel gravida mauris 
                            purus vel lorem. Mauris egestas cursus arcu, rhoncus pellentesque sapien faucibus id. Aliquam egestas tristique ullamcorper. Integer quis 
                            augue blandit, fermentum urna fringilla, dictum ex. Etiam vitae fringilla ipsum. Aenean auctor erat tellus, in vestibulum nisi hendrerit 
                            aliquam.
                            Praesent porta purus sed eleifend euismod. Aliquam varius neque justo, at facilisis diam molestie pellentesque. Quisque mattis dignissim 
                            scelerisque. Nunc augue turpis, vestibulum cursus mauris in, sagittis scelerisque tellus. Maecenas ac blandit dolor, non lacinia risus. 
                            Sed sed maximus arcu. Ut suscipit elit odio, non faucibus dui ultrices eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                            posuere cubilia curae.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, felis nec faucibus euismod, est erat tincidunt odio, quis viverra 
                            eros tortor ut diam. Proin fringilla suscipit tellus. Proin nisl purus, ultrices convallis lorem ut, ornare vehicula dui. Proin convallis nibh 
                            vel leo semper accumsan sed vitae ante. Nam magna diam, maximus in purus et, tristique dignissim sapien. Sed eget ultricies sem. Quisque ex massa, 
                            euismod a consectetur sit amet, congue et felis. Aenean ut magna est.
                            Nam iaculis ipsum viverra velit lobortis volutpat. Proin dapibus augue eu sem bibendum, nec vestibulum mi ullamcorper. Sed massa dui, facilisis a 
                            consequat non, feugiat in dui. Fusce rutrum felis nisl, nec tincidunt nunc facilisis quis. Aliquam nec ex non felis cursus egestas quis placerat 
                            tortor. Sed eleifend consequat risus eget posuere. Nam vel mauris luctus, consectetur odio efficitur, blandit risus. Donec ut orci consectetur, 
                            ullamcorper magna pellentesque, tincidunt arcu. Nulla nunc nisl, egestas nec rhoncus eget, sollicitudin ac massa. Nullam at sodales quam. 
                            Duis odio lacus, laoreet ac nulla vitae, feugiat facilisis augue. Pellentesque fermentum aliquet lacus, quis vehicula nibh efficitur sed. Fusce 
                            cursus accumsan lorem at finibus. Vestibulum id lorem non nisi pellentesque mollis.
                            In ultrices elit ut auctor pellentesque. Curabitur eu fringilla lorem. Morbi auctor vel felis quis consequat. Vivamus non nisi eu nulla scelerisque 
                            dictum. Nullam auctor viverra enim eu pharetra. Quisque in ex ut mauris rutrum scelerisque eu in dui. Aenean aliquet finibus egestas. Etiam in 
                            tempus tortor.
                            Suspendisse sodales nibh a pretium iaculis. Quisque aliquet, purus at ullamcorper posuere, elit odio ullamcorper ipsum, vel gravida mauris purus 
                            vel lorem. Mauris egestas cursus arcu, rhoncus pellentesque sapien faucibus id. Aliquam egestas tristique ullamcorper. Integer quis augue blandit, 
                            fermentum urna fringilla, dictum ex. Etiam vitae fringilla ipsum. Aenean auctor erat tellus, in vestibulum nisi hendrerit aliquam.
                            Praesent porta purus sed eleifend euismod. Aliquam varius neque justo, at facilisis diam molestie pellentesque. Quisque mattis dignissim 
                            scelerisque. Nunc augue turpis, vestibulum cursus mauris in, sagittis scelerisque tellus. Maecenas ac blandit dolor, non lacinia risus. Sed sed 
                            maximus arcu. Ut suscipit elit odio, non faucibus dui ultrices eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                            cubilia curae.
                        </p>
                    </div>
                </Tab>
                <Tab :isSelected="selected === 'Política de privacidade'">
                    <div class="text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, felis nec faucibus euismod, est erat tincidunt odio,
                            quis viverra eros tortor ut diam. Proin fringilla suscipit tellus. Proin nisl purus, ultrices convallis lorem ut, ornare vehicula dui. 
                            Proin convallis nibh vel leo semper accumsan sed vitae ante. Nam magna diam, maximus in purus et, tristique dignissim sapien. 
                            Sed eget ultricies sem. Quisque ex massa, euismod a consectetur sit amet, congue et felis. Aenean ut magna est.
                            Nam iaculis ipsum viverra velit lobortis volutpat. Proin dapibus augue eu sem bibendum, nec vestibulum mi ullamcorper. Sed massa dui, 
                            facilisis a consequat non, feugiat in dui. Fusce rutrum felis nisl, nec tincidunt nunc facilisis quis. Aliquam nec ex non felis cursus 
                            egestas quis placerat tortor. Sed eleifend consequat risus eget posuere. Nam vel mauris luctus, consectetur odio efficitur, blandit risus. 
                            Donec ut orci consectetur, ullamcorper magna pellentesque, tincidunt arcu. Nulla nunc nisl, egestas nec rhoncus eget, sollicitudin ac 
                            massa. Nullam at sodales quam. Duis odio lacus, laoreet ac nulla vitae, feugiat facilisis augue. Pellentesque fermentum aliquet lacus, 
                            quis vehicula nibh efficitur sed. Fusce cursus accumsan lorem at finibus. Vestibulum id lorem non nisi pellentesque mollis.
                            In ultrices elit ut auctor pellentesque. Curabitur eu fringilla lorem. Morbi auctor vel felis quis consequat. Vivamus non nisi eu nulla 
                            scelerisque dictum. Nullam auctor viverra enim eu pharetra. Quisque in ex ut mauris rutrum scelerisque eu in dui. Aenean aliquet finibus 
                            egestas. Etiam in tempus tortor.
                            Suspendisse sodales nibh a pretium iaculis. Quisque aliquet, purus at ullamcorper posuere, elit odio ullamcorper ipsum, vel gravida mauris 
                            purus vel lorem. Mauris egestas cursus arcu, rhoncus pellentesque sapien faucibus id. Aliquam egestas tristique ullamcorper. Integer quis 
                            augue blandit, fermentum urna fringilla, dictum ex. Etiam vitae fringilla ipsum. Aenean auctor erat tellus, in vestibulum nisi hendrerit 
                            aliquam.
                            Praesent porta purus sed eleifend euismod. Aliquam varius neque justo, at facilisis diam molestie pellentesque. Quisque mattis dignissim 
                            scelerisque. Nunc augue turpis, vestibulum cursus mauris in, sagittis scelerisque tellus. Maecenas ac blandit dolor, non lacinia risus. 
                            Sed sed maximus arcu. Ut suscipit elit odio, non faucibus dui ultrices eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                            posuere cubilia curae.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, felis nec faucibus euismod, est erat tincidunt odio, quis viverra 
                            eros tortor ut diam. Proin fringilla suscipit tellus. Proin nisl purus, ultrices convallis lorem ut, ornare vehicula dui. Proin convallis nibh 
                            vel leo semper accumsan sed vitae ante. Nam magna diam, maximus in purus et, tristique dignissim sapien. Sed eget ultricies sem. Quisque ex massa, 
                            euismod a consectetur sit amet, congue et felis. Aenean ut magna est.
                            Nam iaculis ipsum viverra velit lobortis volutpat. Proin dapibus augue eu sem bibendum, nec vestibulum mi ullamcorper. Sed massa dui, facilisis a 
                            consequat non, feugiat in dui. Fusce rutrum felis nisl, nec tincidunt nunc facilisis quis. Aliquam nec ex non felis cursus egestas quis placerat 
                            tortor. Sed eleifend consequat risus eget posuere. Nam vel mauris luctus, consectetur odio efficitur, blandit risus. Donec ut orci consectetur, 
                            ullamcorper magna pellentesque, tincidunt arcu. Nulla nunc nisl, egestas nec rhoncus eget, sollicitudin ac massa. Nullam at sodales quam. 
                            Duis odio lacus, laoreet ac nulla vitae, feugiat facilisis augue. Pellentesque fermentum aliquet lacus, quis vehicula nibh efficitur sed. Fusce 
                            cursus accumsan lorem at finibus. Vestibulum id lorem non nisi pellentesque mollis.
                            In ultrices elit ut auctor pellentesque. Curabitur eu fringilla lorem. Morbi auctor vel felis quis consequat. Vivamus non nisi eu nulla scelerisque 
                            dictum. Nullam auctor viverra enim eu pharetra. Quisque in ex ut mauris rutrum scelerisque eu in dui. Aenean aliquet finibus egestas. Etiam in 
                            tempus tortor.
                            Suspendisse sodales nibh a pretium iaculis. Quisque aliquet, purus at ullamcorper posuere, elit odio ullamcorper ipsum, vel gravida mauris purus 
                            vel lorem. Mauris egestas cursus arcu, rhoncus pellentesque sapien faucibus id. Aliquam egestas tristique ullamcorper. Integer quis augue blandit, 
                            fermentum urna fringilla, dictum ex. Etiam vitae fringilla ipsum. Aenean auctor erat tellus, in vestibulum nisi hendrerit aliquam.
                            Praesent porta purus sed eleifend euismod. Aliquam varius neque justo, at facilisis diam molestie pellentesque. Quisque mattis dignissim 
                            scelerisque. Nunc augue turpis, vestibulum cursus mauris in, sagittis scelerisque tellus. Maecenas ac blandit dolor, non lacinia risus. Sed sed 
                            maximus arcu. Ut suscipit elit odio, non faucibus dui ultrices eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                            cubilia curae.
                        </p>
                    </div>
                </Tab>
                <Tab :isSelected="selected === 'Uso de cookies'">
                    <div class="text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, felis nec faucibus euismod, est erat tincidunt odio,
                            quis viverra eros tortor ut diam. Proin fringilla suscipit tellus. Proin nisl purus, ultrices convallis lorem ut, ornare vehicula dui. 
                            Proin convallis nibh vel leo semper accumsan sed vitae ante. Nam magna diam, maximus in purus et, tristique dignissim sapien. 
                            Sed eget ultricies sem. Quisque ex massa, euismod a consectetur sit amet, congue et felis. Aenean ut magna est.
                            Nam iaculis ipsum viverra velit lobortis volutpat. Proin dapibus augue eu sem bibendum, nec vestibulum mi ullamcorper. Sed massa dui, 
                            facilisis a consequat non, feugiat in dui. Fusce rutrum felis nisl, nec tincidunt nunc facilisis quis. Aliquam nec ex non felis cursus 
                            egestas quis placerat tortor. Sed eleifend consequat risus eget posuere. Nam vel mauris luctus, consectetur odio efficitur, blandit risus. 
                            Donec ut orci consectetur, ullamcorper magna pellentesque, tincidunt arcu. Nulla nunc nisl, egestas nec rhoncus eget, sollicitudin ac 
                            massa. Nullam at sodales quam. Duis odio lacus, laoreet ac nulla vitae, feugiat facilisis augue. Pellentesque fermentum aliquet lacus, 
                            quis vehicula nibh efficitur sed. Fusce cursus accumsan lorem at finibus. Vestibulum id lorem non nisi pellentesque mollis.
                            In ultrices elit ut auctor pellentesque. Curabitur eu fringilla lorem. Morbi auctor vel felis quis consequat. Vivamus non nisi eu nulla 
                            scelerisque dictum. Nullam auctor viverra enim eu pharetra. Quisque in ex ut mauris rutrum scelerisque eu in dui. Aenean aliquet finibus 
                            egestas. Etiam in tempus tortor.
                            Suspendisse sodales nibh a pretium iaculis. Quisque aliquet, purus at ullamcorper posuere, elit odio ullamcorper ipsum, vel gravida mauris 
                            purus vel lorem. Mauris egestas cursus arcu, rhoncus pellentesque sapien faucibus id. Aliquam egestas tristique ullamcorper. Integer quis 
                            augue blandit, fermentum urna fringilla, dictum ex. Etiam vitae fringilla ipsum. Aenean auctor erat tellus, in vestibulum nisi hendrerit 
                            aliquam.
                            Praesent porta purus sed eleifend euismod. Aliquam varius neque justo, at facilisis diam molestie pellentesque. Quisque mattis dignissim 
                            scelerisque. Nunc augue turpis, vestibulum cursus mauris in, sagittis scelerisque tellus. Maecenas ac blandit dolor, non lacinia risus. 
                            Sed sed maximus arcu. Ut suscipit elit odio, non faucibus dui ultrices eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                            posuere cubilia curae.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, felis nec faucibus euismod, est erat tincidunt odio, quis viverra 
                            eros tortor ut diam. Proin fringilla suscipit tellus. Proin nisl purus, ultrices convallis lorem ut, ornare vehicula dui. Proin convallis nibh 
                            vel leo semper accumsan sed vitae ante. Nam magna diam, maximus in purus et, tristique dignissim sapien. Sed eget ultricies sem. Quisque ex massa, 
                            euismod a consectetur sit amet, congue et felis. Aenean ut magna est.
                            Nam iaculis ipsum viverra velit lobortis volutpat. Proin dapibus augue eu sem bibendum, nec vestibulum mi ullamcorper. Sed massa dui, facilisis a 
                            consequat non, feugiat in dui. Fusce rutrum felis nisl, nec tincidunt nunc facilisis quis. Aliquam nec ex non felis cursus egestas quis placerat 
                            tortor. Sed eleifend consequat risus eget posuere. Nam vel mauris luctus, consectetur odio efficitur, blandit risus. Donec ut orci consectetur, 
                            ullamcorper magna pellentesque, tincidunt arcu. Nulla nunc nisl, egestas nec rhoncus eget, sollicitudin ac massa. Nullam at sodales quam. 
                            Duis odio lacus, laoreet ac nulla vitae, feugiat facilisis augue. Pellentesque fermentum aliquet lacus, quis vehicula nibh efficitur sed. Fusce 
                            cursus accumsan lorem at finibus. Vestibulum id lorem non nisi pellentesque mollis.
                            In ultrices elit ut auctor pellentesque. Curabitur eu fringilla lorem. Morbi auctor vel felis quis consequat. Vivamus non nisi eu nulla scelerisque 
                            dictum. Nullam auctor viverra enim eu pharetra. Quisque in ex ut mauris rutrum scelerisque eu in dui. Aenean aliquet finibus egestas. Etiam in 
                            tempus tortor.
                            Suspendisse sodales nibh a pretium iaculis. Quisque aliquet, purus at ullamcorper posuere, elit odio ullamcorper ipsum, vel gravida mauris purus 
                            vel lorem. Mauris egestas cursus arcu, rhoncus pellentesque sapien faucibus id. Aliquam egestas tristique ullamcorper. Integer quis augue blandit, 
                            fermentum urna fringilla, dictum ex. Etiam vitae fringilla ipsum. Aenean auctor erat tellus, in vestibulum nisi hendrerit aliquam.
                            Praesent porta purus sed eleifend euismod. Aliquam varius neque justo, at facilisis diam molestie pellentesque. Quisque mattis dignissim 
                            scelerisque. Nunc augue turpis, vestibulum cursus mauris in, sagittis scelerisque tellus. Maecenas ac blandit dolor, non lacinia risus. Sed sed 
                            maximus arcu. Ut suscipit elit odio, non faucibus dui ultrices eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                            cubilia curae.
                        </p>
                    </div>
                </Tab>
            </TabNav>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import PageTitle from '../components/PageTitle.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import TabNav from '../components/TabNav.vue'
import Tab from '../components/Tab.vue'

export default {
    name: 'TextosLegais',
    components: {
        Header,
        PageTitle,
        Breadcrumb,
        TabNav,
        Tab        
    },
    data () {
        return {
            selected: 'Termos de uso'
        }
    },
    methods: {
        setSelected(tab) {
            this.selected = tab;
        }
    }
}
</script>

<style scoped>
    .text {
        margin-top: 110px;
    }
    .container.tabs {
        margin-top: -100px;
    }
</style>