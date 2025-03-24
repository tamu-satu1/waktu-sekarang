const Waktu = {
    waktu: () => { return new Date() },
    tahun: () => { return new Date().getFullYear() },
    tanggal: () => { return new Date().getDate() },
    bulan: () => { return (new Date().getMonth()) },
    hari: () => { return new Date().getDay() },
    jam: () => { return new Date().getHours() },
    menit: () => { return new Date().getMinutes() },
    detik: () => { return new Date().getSeconds() },
    namaHari: () => {
        switch (Waktu.hari()) {
            case 1: return 'senin'
            case 2: return 'selasa'
            case 3: return 'rabu'
            case 4: return 'kamis'
            case 5: return 'jumat'
            case 6: return 'sabtu'
            case 7: return 'minggu'
            default: return undefined
        }
    },
    namaBulan: () => {
        switch (Waktu.bulan()) {
            case 0:
                return 'januari'
            case 1:
                return 'februari'
            case 2:
                return 'maret'
            case 3:
                return 'april'
            case 4:
                return 'mei'
            case 5:
                return 'juni'
            case 6:
                return 'juli'
            case 7:
                return 'agustus'
            case 8:
                return 'september'
            case 9:
                return 'oktober'
            case 10:
                return 'november'
            case 11:
                return 'desember'
            default:
                return undefined
        }
    },
    sekarang: () => { return `${Waktu.namaHari()} ${Waktu.tanggal()} ${Waktu.namaBulan()} ${Waktu.tahun()} ${Waktu.jam()}:${Waktu.menit()}:${Waktu.detik()}` }
}
