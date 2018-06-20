import * as React from 'react';
import { Image } from '../../Image';
import { Icon } from '../../Icon';
import { IClassNames } from '@uifabric/utilities/lib/IClassNames';
import {
  IChoiceGroupOptionProps,
  IChoiceGroupOptionStyleProps,
  IChoiceGroupOptionStyles
} from './ChoiceGroupOption.types';
import { BaseComponent, classNamesFunction, getNativeProps, inputProperties, createRef } from '../../../Utilities';

const getClassNames = classNamesFunction<IChoiceGroupOptionStyleProps, IChoiceGroupOptionStyles>();

export class ChoiceGroupOptionBase extends BaseComponent<IChoiceGroupOptionProps, any> {
  private _inputElement = createRef<HTMLInputElement>();
  private _classNames: IClassNames<IChoiceGroupOptionStyles>;

  constructor(props: IChoiceGroupOptionProps) {
    super(props);
  }

  public render(): JSX.Element {
    const {
      focused,
      required,
      theme,
      iconProps,
      imageSrc,
      imageSize = { width: 32, height: 32 },
      disabled,
      checked,
      id,
      labelId,
      styles,
      name,
      onRenderField = this._onRenderField
    } = this.props;

    this._classNames = getClassNames(styles!, {
      theme: theme!,
      hasIcon: !!iconProps,
      hasImage: !!imageSrc,
      checked,
      disabled,
      imageIsLarge: !!imageSrc && (imageSize.width > 71 || imageSize.height > 71),
      focused
    });

    return (
      <div className={this._classNames.root}>
        <div className={this._classNames.choiceFieldWrapper}>
          <input
            ref={this._inputElement}
            id={id}
            className={this._classNames.input}
            type="radio"
            name={name}
            disabled={disabled}
            checked={checked}
            required={required}
            onChange={this._onChange.bind(this, this.props)}
            onFocus={this._onFocus.bind(this, this.props)}
            onBlur={this._onBlur.bind(this, this.props)}
            aria-labelledby={labelId}
            {...getNativeProps(this.props, inputProperties)}
          />
          {onRenderField(this.props, this._onRenderField)}
        </div>
      </div>
    );
  }

  private _onChange(props: IChoiceGroupOptionProps, evt: React.FormEvent<HTMLInputElement>): void {
    const { onChange } = props;
    if (onChange) {
      onChange(evt, props);
    }
  }

  private _onBlur(props: IChoiceGroupOptionProps, evt: React.FocusEvent<HTMLElement>) {
    const { onBlur } = props;
    if (onBlur) {
      onBlur(evt, props);
    }
  }

  private _onFocus(props: IChoiceGroupOptionProps, evt: React.FocusEvent<HTMLElement>) {
    const { onFocus } = props;
    if (onFocus) {
      onFocus(evt, props);
    }
  }

  private _onRenderField = (props: IChoiceGroupOptionProps): JSX.Element => {
    const { onRenderLabel = this._onRenderLabel, id, imageSrc, imageAlt, selectedImageSrc, iconProps } = props;

    const imageSize = props.imageSize ? props.imageSize : { width: 32, height: 32 };

    return (
      <label htmlFor={id} className={this._classNames.field}>
        {imageSrc && (
          <div className={this._classNames.innerField} style={{ height: imageSize.height, width: imageSize.width }}>
            <div className={this._classNames.imageWrapper}>
              <Image src={imageSrc} alt={imageAlt ? imageAlt : ''} width={imageSize.width} height={imageSize.height} />
            </div>
            <div className={this._classNames.selectedImageWrapper}>
              <Image
                src={selectedImageSrc}
                alt={imageAlt ? imageAlt : ''}
                width={imageSize.width}
                height={imageSize.height}
              />
            </div>
          </div>
        )}
        {iconProps ? (
          <div className={this._classNames.innerField}>
            <div className={this._classNames.iconWrapper}>
              <Icon {...iconProps} />
            </div>
          </div>
        ) : null}
        {imageSrc || iconProps ? (
          <div className={this._classNames.labelWrapper} style={{ maxWidth: imageSize.width * 2 }}>
            {onRenderLabel!(props)}
          </div>
        ) : (
          onRenderLabel!(props)
        )}
      </label>
    );
  };

  private _onRenderLabel = (props: IChoiceGroupOptionProps): JSX.Element => {
    return (
      <span id={props.labelId} className="ms-Label">
        {props.text}
      </span>
    );
  };
}
