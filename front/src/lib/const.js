// place files you want to import through the `$lib` alias in this folder.

// 건강정보,연예정보,맛집정보,분양정보,기타정보
export const category_list = [
    { link: 'free', name: '자유정보', type: 'board', db: 'view_board' },
    { link: 'dive', name: '다이빙정보', type: 'img', db: 'view_board' },
    { link: 'board', name: '일반게시판', type: 'img', db: 'free_board' },
]

export const siteName = '포다이버스'

export const back_api = `${import.meta.env.VITE_SERVER_URL}/api/v3`