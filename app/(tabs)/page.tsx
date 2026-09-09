import { Image } from 'expo-image';
import { createContext, useContext, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

type CartContextValue = {
    total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

function useCart() {
    const context = useContext(CartContext);
    if (context === null || context === undefined) {
        throw new Error('useCart має використовуватись усередині CartProvider');
    }
    return context;
}

const PRODUCTS = [
    { id: '1', img: require('../../assets/images/laptop.webp'), name: 'Ноутбук', price: 55000 },
    { id: '2', img: require('../../assets/images/iphone.webp'), name: 'Смартфон', price: 60000 },
    { id: '3', img: require('../../assets/images/headphones.webp'), name: 'Навушники', price: 1800 },
    { id: '4', img: require('../../assets/images/keyboard.webp'), name: 'Клавіатура', price: 2900 },
    { id: '5', img: require('../../assets/images/monitor.webp'), name: 'Монітор', price: 49000 },
];

function CartWidget() {
    const { total } = useCart();
    return (
        <View style={styles.cartWidget}>
            <Text style={styles.cartText}>Кошик: {total} грн</Text>
        </View>
    );
}

function Header() {
    return (
        <View style={[styles.container, styles.containerHeader]}>
            <Text style={styles.headerTitle}>Магазин</Text>
            <CartWidget />
        </View>
    );
}


function ProductItem({ product, onBuy }: { product: { id: string; img: string; name: string; price: number }; onBuy: (product: { id: string; img: string; name: string; price: number }) => void }) {
    return (
        <View style={styles.productItem}>
            <Image source={product.img} style={styles.image}/>
            <View>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price} грн</Text>
            </View>
            <Button title="Купити" onPress={() => onBuy(product)} />
        </View>
    );
}

export default function ShopScreen() {
    const [total, setTotal] = useState(0);
    const WindowSize = useWindowDimensions();
    const columns = WindowSize.width <= 500 ? 1 : WindowSize.width <= 800 ? 2 : 3;


    const handleBuy = (product: { id: string; img: string; name: string; price: number }) => {
        console.log(`Користувач купив: ${product.name} за ${product.price} грн`);
        setTotal((prev) => prev + product.price);
    };

    return (
        <CartContext.Provider value={{ total}}>
            <Header />
            <FlatList
                style={styles.list}
                data={PRODUCTS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductItem product={item} onBuy={handleBuy} />
                )}
            />
        </CartContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    image:{
        height: 100,
        width: 100,
    },
    containerHeader: {
        backgroundColor: 'darkgray',
        alignItems: 'flex-end',
        padding: 20,
        paddingTop: 50,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 8,
    },
    cartWidget: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 10,
    },
    cartText: {
        fontSize: 16,
        fontWeight: '600',
    },
    list: {
        flex: 1,
        backgroundColor: '#c4cdfd',
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginVertical: 6,
        padding: 14,
        borderRadius: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 14,
        color: '#555',
    },
});