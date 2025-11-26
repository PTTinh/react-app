import av from '../../public/img/av.png';
import bg from '../../public/img/bg.jpg';

function personalInfo() {
    return (
        <>
            <div className="personal-info">
                <div className="pictures">
                    <div className="background">
                        <img src={bg} alt=""/>
                    </div>
                    <div className="avatar">
                        <img src={av} alt=""/>
                    </div>
                </div>
                <div className="info">
                    <div className="info-ground">
                        <h4 className="info-header">Mục tiêu nghề nghiệp</h4>
                        <div className="info-body">
                            <p>Mục tiêu nghề nghiệp của tôi là trở thành một lập trình viên
                                chuyên nghiệp, đóng góp vào sự phát triển của công nghệ và
                                tạo ra các sản phẩm mang lại giá trị thực cho người dùng.
                            </p>
                        </div>
                    </div>
                    <div className="info-ground">
                        <h4 className="info-header">Học vấn</h4>
                        <div className="info-body">
                            <p>Tôi đã tốt nghiệp đại học chuyên ngành Công nghệ Thông tin tại
                                trường Đại học Bách Khoa Hà Nội. Trong quá trình học tập, tôi đã
                                tích lũy được nhiều kiến thức và kỹ năng quý giá trong lĩnh vực
                                lập trình và phát triển phần mềm.
                            </p>
                        </div>
                    </div>
                    <div className="info-ground">
                        <h4 className="info-header">Liên hệ</h4>
                        <div className="info-body">
                            <p>Email: phamtrongtinh@example.com</p>
                            <p>Điện thoại: 0123 456 789</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default personalInfo;