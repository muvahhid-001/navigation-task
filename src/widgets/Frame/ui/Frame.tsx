import { PreviewFrame } from "@entities/Blocks/ui/PreviewFrame/PreviewFrame";
import { useAppSelector } from "@/shared/hooks";
import { selectBlocks } from "@entities/Blocks/model/blockSlice";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
import { Fallback } from "@/shared/ui/Fallback/Fallback";
import { DevControls } from "@features/DevControl/DevControl";

import styles from "./Frame.module.scss";

export const Frame = () => {
  const blocks = useAppSelector(selectBlocks);

  return (
    <section className={styles.section}>
      <div className={styles.columns}>
        <ErrorBoundary fallback={<Fallback message="Ошибка в форме" />}>
          <PreviewFrame blocks={blocks} />
        </ErrorBoundary>
      </div>
      <DevControls />
    </section>
  );
};
