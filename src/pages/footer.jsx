import "./footer.css";

export default function Footer() {
    return (
        <>
                <div className="h-footer">
                <div className="fregular h-footer_title white">코체</div>
                <div className="h-footer_group">
                    <div className="h-footer_link">
                        <a className="mh felight h-footer_link_ white" rel="noreferrer" target="_blank" href="https://github.com/corche">github</a>
                        <a className="mh felight h-footer_link_ white" rel="noreferrer" target="_blank" href="https://discord.com/users/706788425352740887">discord</a>
                        <a className="mh felight h-footer_link_ white" rel="noreferrer" target="_blank" href="mailto:corche2000@naver.com">email</a>
                    </div>
                    <div className="h-footer_corp white r fthin">© 코체 All Rights Reserved.</div>
                </div>
            </div>
        </>
    );
  }