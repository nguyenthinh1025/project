const stateDefault = {
    gioHang: [
        
    ]
}


export const gioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'ADD_TO_CART': {
            let gioHang = [...state.gioHang];
            let spSanPham = { ...action.sanPhamClick, soLuong: 1 }
            let sp = gioHang.find(item => item.id === spSanPham.id);
            if (sp) {
                sp.soLuong += 1;
            } else {

                gioHang.push(spSanPham);
            }
            state.gioHang = gioHang;
            return { ...state }
        }
        case 'REMOVE_PRODUCT': {
            let gioHang = [...state.gioHang];
            gioHang = gioHang.filter(item => item.id !== action.maSanPhamClick);
            state.gioHang = gioHang;
            return { ...state }
        }

        default: return state;
    }
}