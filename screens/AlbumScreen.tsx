import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

// import SongListItem from '../components/SongListItem'
import AlbumHeader from '../components/AlbumHeader'

const AlbumScreen = () => {

    const route = useRoute();

    // useEffect(() => {
    //     const fetchAlbumDetails = async () => {
    //         try {
    //             const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }))
    //             setAlbum(data.data.getAlbum)
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }

    return (
        <View>
            <FlatList
                data={album.songs.items}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={album} />}
            />
        </View>
    )
}

export default AlbumScreen